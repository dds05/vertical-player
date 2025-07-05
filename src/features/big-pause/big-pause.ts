import videojs from "video.js";
import './big-pause.css'
import { BigPauseIcon} from "../../assets";
import {getPlayer,parseSvgString} from "../../utils/generic";
const Component = videojs.getComponent('Component');

interface bigPauseToggle{
    playerId:any
}

class bigPauseToggle extends Component {

  constructor(player:any, options:any) {
    super(player, options);
    this.playerId = options.playerId ;
    this.createUI();
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    let elem = videojs.dom.createEl('div', {
      className: `big-pause-btn hide`,
    }) 
    return elem;
  }

  createUI() {
    let parent:any = this.el();
    parent.append(parseSvgString(BigPauseIcon())) 
    const player = getPlayer(this.playerId);

    parent.onclick = () => {
      player.play();
    }

    // const player = getPlayer(this.playerId)
    const playerel=document.querySelector(`#${this.playerId}_html5_api`,`.${this.playerId}`,'.vjs-tech');
    
    console.log('now',playerel);
    
    if (playerel) {
      playerel.onclick = (e) =>{
        if (player.paused()) {
            console.log(1);
    
          player.play() 
          parent.classList.add('hide')
        } else {
            console.log(2);
          player.pause() 
          parent.classList.remove('hide')
        }
      }
    //   playerel.addEventListener('touchstart', () =>{
    //     if (player.paused()) {
    //       player.play() 
    //       parent.classList.add('hide')
    //     } else {
    //       player.pause() 
    //       parent.classList.remove('hide')
    //     }
    //   })
    }

    player.on('play', () =>{
      parent?.classList?.add('hide')
    })
  }
}

export
default bigPauseToggle;