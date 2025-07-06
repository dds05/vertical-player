import { getPlayer } from "@/utils/generic";
import { addBigPauseBtn, addUserInteractionContainer, addVideoDescription, addVideoGradient } from "@/features";
import './index.css'
import { playerEvents } from "./events";
import { PlayerIdType, PlayerInstance } from "../types/videojs";



function initaliseSkin(playerId:PlayerIdType , options:Object) {
    addFeatures(playerId, options);
    playerEvents(playerId)
}

function addFeatures(playerId:PlayerIdType, options:Object) {
    console.log(playerId);
    
    const player:PlayerInstance = getPlayer(playerId);

    if (player) {        
        player.addChild('ProgressControl');
        player.addChild('PlayToggle');
        player.addChild('VolumePanel');

        addVideoDescription(playerId,{});
        addVideoGradient(playerId, { top: true, bottom: true });
        addBigPauseBtn(playerId,{})
        addUserInteractionContainer(playerId, options);
    }
}

export { initaliseSkin }