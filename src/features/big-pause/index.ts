import videojs from "video.js";
import './index.css'
import { BigPlayIcon } from "../../assets";
import { getPlayer, parseSvgString } from "../../utils/generic";
import { PlayerIdType, PlayerInstance } from "@/components/types/videojs";
const Component = videojs.getComponent('Component');



class BigPlayButton extends Component {
  playerId: PlayerIdType;

  constructor(player: any, options: any) {
    super(player, options);
    this.playerId = options.playerId;
    this.createUI();
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    let elem = videojs.dom.createEl('div', {
      className: `vjs-big-play-btn hide`,
    })
    return elem;
  }

  createUI() {
    let parent: any = this.el();
    parent.append(parseSvgString(BigPlayIcon()))
    const player: PlayerInstance = getPlayer(this.playerId);

    parent.onclick = () => {
      if (player)
        player.play();

    }


    const playerEl = document.querySelector(`#${this.playerId}_html5_api`, `.${this.playerId}`, '.vjs-tech');



    if (playerEl) {
      playerEl.onclick = (e) => {
        if (player?.paused()) {
          player.play()
          parent.classList.add('hide')
        } else {
          player?.pause()
          parent.classList.remove('hide')
        }
      }
      playerEl.addEventListener('touchstart', () => {
        if (player?.paused()) {
          player.play()
          parent.classList.add('hide')
        } else {
          player?.pause()
          parent.classList.remove('hide')
        }
      })
    }

    player?.on('play', () => {
      parent?.classList?.add('hide')
    })
  }
}

export default BigPlayButton;