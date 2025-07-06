
import { getPlayer } from "@/utils/generic";
import { PlayerIdType, PlayerInstance } from "../types/videojs";

function playerEvents(playerId:PlayerIdType) {
    let player:PlayerInstance= getPlayer(playerId);
    if (player) {
        player.ready(() => {
            player.on('volumechange', () => {
                const volume = parseFloat((player?.volume?.() ?? 1).toFixed(2)) * 100;
                if (player.muted())
                    sessionStorage.setItem('vertical_player_volume', '0');
                else
                    sessionStorage.setItem('vertical_player_volume', volume.toString());
            });
        });
    } 
   
}

export { playerEvents};
