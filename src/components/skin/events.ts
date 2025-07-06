
import { getPlayer } from "@/utils/generic";
import { PlayerIdType } from "../types/videojs";

function playerEvents(playerId:PlayerIdType) {
    let player = getPlayer(playerId);

    if (player) {
        player.ready(() => {
            player.on('volumechange', () => {
                const volume:any = parseFloat(player.volume().toFixed(2)) * 100;
                if (player.muted())
                    sessionStorage.setItem('vertical_player_volume', '0');
                else
                    sessionStorage.setItem('vertical_player_volume', volume.toString());
            });
        });
    } 
   
}

export { playerEvents };
