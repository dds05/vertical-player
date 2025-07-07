import { PlayerIdType } from '@/components/types/videojs';
import videojs from 'video.js';
import VideoDescription from './description';
import { UserInteractionType, VideoDescriptionType } from './type';

const addVideoGradient = (playerId: PlayerIdType) => {
  import('./gradient').then((e) => {
    let VideoGradient = e.default;
    const player = videojs(playerId);
    videojs.registerComponent("VideoGradient", VideoGradient);
    player.addChild("VideoGradient", { playerId });
  });
};


const addVideoDescription = (playerId:PlayerIdType,options:VideoDescriptionType)=>{
    import('./description').then((e) => {
      let VideoDescription = e.default;
      const player = videojs(playerId);
      videojs.registerComponent("VideoDescription", VideoDescription);      
      player.addChild("VideoDescription", { playerId,...options});
    })
  }



  const addUserInteractionContainer = (playerId:PlayerIdType,options:any)=>{
    import('./user-intereaction').then((e) => {
      let UserInteraction = e.default;
      const player = videojs(playerId);
      videojs.registerComponent("UserInteraction", UserInteraction);
      player.addChild("UserInteraction", { playerId,...options});
    })
  }

  const addBigPlayButton = (playerId:PlayerIdType)=>{
    import('./big-pause').then((e) => {
      let BigPlayButton = e.default;
      const player = videojs(playerId);
      videojs.registerComponent("BigPlayButton", BigPlayButton);
      player.addChild("BigPlayButton", { playerId });
    })
  }


  export {addVideoDescription, addBigPlayButton,addVideoGradient,addUserInteractionContainer}