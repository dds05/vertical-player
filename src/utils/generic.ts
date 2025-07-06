
import { PlayerIdType, PlayerInstance } from '@/components/types/videojs';
import videojs from 'video.js';



const getPlayer = (playerId: PlayerIdType) : PlayerInstance  => {
    if (videojs.getPlayer(`${playerId}`))
        return videojs.getPlayer(`${playerId}`);
    else
        return null;
}


const parseSvgString = (svgString:any) =>{
    const parsedDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml')
    const svgElement = parsedDoc?.querySelector('svg');
    return svgElement
}


export {getPlayer,parseSvgString}