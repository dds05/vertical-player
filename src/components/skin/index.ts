import { getPlayer } from "@/utils/generic";
import { addBigPlayButton, addUserInteractionContainer, addVideoDescription, addVideoGradient } from "@/features";
import './index.css'
import { playerEvents } from "./events";
import { PlayerIdType, PlayerInstance } from "../types/videojs";



function initaliseSkin(playerId:PlayerIdType , options:Object) {
    addFeatures(playerId, options);
    playerEvents(playerId)
}

function addFeatures(playerId:PlayerIdType, options:any) {

    const metadata= options?.metadata ?? {};
    const id= options?.id ?? {};
    const handleLike=options?.handleLike;
    const handleShare=options?.handleShare;
    const theme= options?.theme;
    
    const player:PlayerInstance = getPlayer(playerId);

    if (player) {        
        player.addChild('ProgressControl');
        player.addChild('PlayToggle');
        player.addChild('VolumePanel');

        addVideoGradient(playerId);
        addBigPlayButton(playerId);
        addVideoDescription(playerId,metadata);
        addUserInteractionContainer(playerId, {id, handleLike, handleShare});

        setTimeout(()=>{            
            const BigPlayBtn=player.getChild('BigPlayButton')?.el().querySelector('svg')
            BigPlayBtn?.setAttribute('fill', `${theme}`)
        },100)

        const ProgressBar: any = player.getChild('ProgressControl')?.el().querySelector('.vertical-player-wrapper .vjs-play-progress');
        ProgressBar.style.backgroundColor = `${theme}`
    }
}

export { initaliseSkin }