import videojs from "video.js";
import './index.css'

const Component = videojs.getComponent('Component');

class VideoGradient extends Component {
  top?: boolean;
  bottom?: boolean;

  constructor(player: any, options: any) {
    super(player, options);
    this.top = true;
    this.bottom = true;
    this.createUI();
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    let elem = videojs.dom.createEl('div', {
      className: `vjs-gradient`,
    })
    return elem;
  }

  createUI() {
    let parent = this.el();

    if (this.top) {
      let topGradient = videojs.dom.createEl('div', {
        className: 'vjs-gradient-top',
      })
      parent.append(topGradient)
    }
    if (this.bottom) {
      let bottomGradient = videojs.dom.createEl('div', {
        className: 'vjs-gradient-bottom',
      })
      parent.append(bottomGradient)
    }
  }
}
export default VideoGradient;