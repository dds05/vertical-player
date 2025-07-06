import { getPlayer } from "@/utils/generic";
import { addBigPauseBtn, addUserInteractionContainer, addVideoDescription, addVideoGradient } from "@/features";
import './index.css'
import { playerEvents } from "./events";





function initaliseSkin(playerId:string , options:Object) {
    addFeatures(playerId, options);
    playerEvents(playerId)
}

function addFeatures(playerId:string, options:Object) {
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