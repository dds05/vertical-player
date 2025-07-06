import { PlayerIdType } from '@/components/types/videojs';
import videojs from 'video.js';
import VideoDescription from './description';
import { UserInteractionType, VideoDescriptionType } from './type';

const addVideoGradient = (playerId: PlayerIdType) => {
  import('./gradient').then((e) => {
    let VideoGradient = e.default;
    let player = videojs(playerId);
    videojs.registerComponent("VideoGradient", VideoGradient);
    player.addChild("VideoGradient", { playerId });
  });
};


const addVideoDescription = (playerId:PlayerIdType,options:VideoDescriptionType)=>{
    import('./description').then((e) => {
      let VideoDescription = e.default;
      let player = videojs(playerId);
      videojs.registerComponent("VideoDescription", VideoDescription);
      player.addChild("VideoDescription", { playerId,...options}, player?.controlBar.children().length - 4);
    })
  }



  const addUserInteractionContainer = (playerId:PlayerIdType,options:UserInteractionType)=>{
    import('./user-intereaction').then((e) => {
      let userInteraction = e.default;
      let player = videojs(playerId);
      videojs.registerComponent("userInteraction", userInteraction);
      player.addChild("userInteraction", { playerId,...options}, player.controlBar.children().length - 4);
    })
  }

  const addBigPlayButton = (playerId:PlayerIdType)=>{
    import('./big-pause').then((e) => {
      let BigPlayButton = e.default;
      let player = videojs(playerId);
      videojs.registerComponent("BigPlayButton", BigPlayButton);
      player.addChild("BigPlayButton", { playerId }, player.controlBar.children().length - 4);
    })
  }


  export {addVideoDescription, addBigPlayButton,addVideoGradient,addUserInteractionContainer}