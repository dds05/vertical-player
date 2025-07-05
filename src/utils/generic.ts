
import videojs from 'video.js'

const getPlayer = (playerId:string) => {
    if (videojs.getPlayer(`${playerId}`))
        return videojs.getPlayer(`${playerId}`);
    else
        return false;
}


const parseSvgString = (svgString:any) =>{
    const parsedDoc = new DOMParser().parseFromString(svgString, 'image/svg+xml')
    const svgElement = parsedDoc?.querySelector('svg');
    return svgElement
}


export {getPlayer,parseSvgString}