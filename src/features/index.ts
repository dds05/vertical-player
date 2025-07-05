import videojs from 'video.js';

const addVideoGradient = (playerId, options) => {
  import('./gradient/gradient').then((e) => {
    let videoGradient = e.default;
    let player = videojs(playerId);
    videojs.registerComponent("videoGradient", videoGradient);
    player.addChild("videoGradient", { playerId, ...options });
  });
};


import 'video.js'
const addVideoDescription = (playerId:string|Element,options:Object)=>{
    import('./description/description').then((e) => {
      let videoDescription = e.default;
      let player = videojs(playerId);
      videojs.registerComponent("videoDescription", videoDescription);
      player.addChild("videoDescription", { playerId,...options}, player?.controlBar.children().length - 4);
    })
  }



  const addUserInteractionContainer = (playerId,options)=>{
    import('./user-intereaction/user-interaction').then((e) => {
      let userInteraction = e.default;
      let player = videojs(playerId);
      videojs.registerComponent("userInteraction", userInteraction);
      player.addChild("userInteraction", { playerId,...options}, player.controlBar.children().length - 4);
    })
  }

  const addBigPauseBtn = (playerId,options)=>{
    import('./big-pause/big-pause').then((e) => {
      let bigPauseToggle = e.default;
      let player = videojs(playerId);
      videojs.registerComponent("bigPauseToggle", bigPauseToggle);
      player.addChild("bigPauseToggle", { playerId,...options}, player.controlBar.children().length - 4);
    })
  }


  export {addVideoDescription, addBigPauseBtn,addVideoGradient,addUserInteractionContainer}