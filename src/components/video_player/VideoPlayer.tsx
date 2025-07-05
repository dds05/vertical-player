"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import './VideoPlayer.css';
import { initaliseSkin } from "../skin";

interface VideoPlayerProps {
  videoSrc: { src: string; type: string };
  playerId: string;
  playing?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc, playerId, playing = true }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<videojs.Player | null>(null);

  useEffect(() => {

        if (videoRef.current && !playerRef.current) {
            console.log(videoRef.current,playerId);
            
            playerRef.current = videojs(videoRef.current, {
              autoplay: false,
              controls: false,
              playerId :playerId,
              muted: true,
              loop: true,
              preload: "auto",
              
              aspectRatio: '9:16',
              sources: [videoSrc],
            },()=>{
              playerRef.current.on('volumechange', () => {
                let volume = playerRef.current.volume().toFixed(2) * 100;
                if (playerRef.current.muted())
                    sessionStorage.setItem('vertical_player_volume', 0);
                else
                    sessionStorage.setItem('vertical_player_volume', volume);
            });
              initaliseSkin(playerId,{})
            });
          }



    return () => {
      if (playerRef.current) {
        // playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!playerRef.current) return;

    if (playing) {
      playerRef.current.play().catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
      });
    } else {
      playerRef.current.pause();
    }
  }, [playing]);

  useEffect(() =>{
 
      if (playerRef.current) {
        if (playing) {
          handleSoundAction();
          playerRef.current.play();
        } else {
          playerRef.current.pause();
        }
      }
  },
  [playing]);
  
  const handleSoundAction = ()=>{
    let muted = sessionStorage.getItem('vertical_player_volume');
    if (muted == 0 || muted == null) {
      playerRef.current.muted(true)
    } else {
      if (playerRef.current.muted()) playerRef.current.muted(false) 
        if (muted) {
        let vol = parseFloat(muted) / 100.0;
        playerRef.current.volume(vol);
      }
  
    }
  }

  return (
    <div className="vertical-player-wrapper">
      {  <video
        ref={videoRef}
        id={playerId}
        className="video-js vjs-big-play-centered"
        playsInline
      />}
    </div>
  );
};

export default VideoPlayer;

