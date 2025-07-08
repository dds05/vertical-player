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
    
    const SVG_NS = "http://www.w3.org/2000/svg";
    function createSVGWithUse(iconId: string, viewBox = "0 0 24 24") {
        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("viewBox", viewBox);
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        const use = document.createElementNS(SVG_NS, "use");
        use.setAttributeNS(null, "href", iconId);
        svg.appendChild(use);
        return { svg, use };
    }
    function injectSVG(targetElement: HTMLElement, iconId: string) {
        if (!targetElement) return null;
        targetElement.classList.add('vjs-svg-icon');
        const { svg, use } = createSVGWithUse(iconId);
        targetElement.appendChild(svg);
        return use;
    }
    const PlayToggleSVG = player?.getChild('PlayToggle').el().firstChild;
    const playUse = injectSVG(PlayToggleSVG, player.paused() ? "#vjs-icon-play" : "#vjs-icon-pause");
    player?.on('pause', () => playUse.setAttributeNS(null, "href", "#vjs-icon-play"));
    player?.on('play', () => playUse.setAttributeNS(null, "href", "#vjs-icon-pause"));

    const VolumePanelSVG = player?.getChild('VolumePanel').el().querySelector('.vjs-mute-control .vjs-icon-placeholder');
    const volumeUse = injectSVG(VolumePanelSVG, "#vjs-icon-volume1");
    player?.on('volumechange', () => {
        const vol = player.volume();
        const isMuted = player.muted();
        const icon = isMuted || vol === 0
            ? "#vjs-icon-mute"
            : vol <= 0.3
                ? "#vjs-icon-volume1"
                : vol <= 0.7
                    ? "#vjs-icon-volume2"
                    : "#vjs-icon-volume3";
        volumeUse?.setAttributeNS(null, "href", icon);
    });

}

export { initaliseSkin }