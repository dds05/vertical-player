"use client";

import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import './VideoPlayer.css';
import { initaliseSkin } from "../skin";
import { PlayerInstance } from "../types/videojs";

interface VideoPlayerProps {
  asset_url: { src: string; type: string };
  playerId: string;
  playing?: boolean;
  metadata?: {tag:string,description:string};
  id?: string,
  handleLike?: Function;
  handleShare?: Function;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ asset_url, playerId, playing = true, metadata ,id , handleLike, handleShare}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<PlayerInstance | null >(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const existingPlayer = videojs.getPlayer(videoRef.current);
    if (!existingPlayer) {
      playerRef.current = videojs(videoRef.current, {
        autoplay: false,
        controls: false,
        playerId: playerId,
        muted: true,
        loop: true,
        preload: "auto",
        aspectRatio: '9:16',
        sources: [{ src: asset_url, type: null }],
      }, () => {
        initaliseSkin(playerId, { metadata, id , handleShare, handleLike});
      });
    } else {
      playerRef.current = existingPlayer;
    }
  
    return () => {
      if (playerRef.current) {
        playerRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!playerRef.current) return;

    if (playing) {
      handleSoundAction();
      playerRef?.current?.play()?.catch((err) => {
        console.warn("Autoplay blocked or failed:", err);
      });
    } else {
      playerRef.current.pause();
      playerRef.current.currentTime(0)
    }
  }, [playing]);
  

  const handleSoundAction = () => {
    let muted: number = parseInt(sessionStorage.getItem('vertical_player_volume')|| '0');
    if (muted == 0 || muted == null) {
      playerRef?.current?.muted(true)
    } else {
      if (playerRef?.current?.muted()) 
        playerRef.current.muted(false)

      if (muted) {
        let vol = parseFloat(muted) / 100.0;
        playerRef?.current?.volume(vol);
      }

    }
  }

  return (
    <div className="vertical-player-wrapper">
      {<video
        ref={videoRef}
        id={playerId}
        className="video-js vjs-big-play-centered"
        playsInline
      />}
    </div>
  );
};

export default VideoPlayer

