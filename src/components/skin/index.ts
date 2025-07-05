import { getPlayer } from "@/utils/generic";
// import { addUserInteractionContainer, addVideoDescription, addVideoGradient } from "../../features";
// import { playerEvents } from "./event";
import './index.css'
import { addBigPauseBtn, addUserInteractionContainer, addVideoDescription, addVideoGradient } from "@/features";




function initaliseSkin(playerId:String, options:Object) {
    addFeatures(playerId, options);
    // playerEvents(playerId, options)
}

function addFeatures(playerId:string|Element, options:Object) {
    console.log(playerId);
    
    const player = getPlayer(playerId);
    console.log(player);
    
    if (player && typeof player.addChild === 'function') {
        console.log(player);
        
        player.addChild('ProgressControl');
        player.addChild('PlayToggle');
        player.addChild('VolumePanel')
        addVideoDescription(playerId,{});
        addVideoGradient(playerId, { top: true, bottom: true });
        addBigPauseBtn(playerId,{})
        addUserInteractionContainer(playerId, options);
    } else {
        console.error(`Error : player.addChild is not a function.`);
    }
}

export { initaliseSkin }