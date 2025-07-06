import videojs from "video.js";
import './gradient.css'


const Component = videojs.getComponent('Component');

class VideoGradient extends Component {
  top?: boolean;
  bottom?: boolean;

  constructor(player:any, options:any) {
    super(player, options);
    this.top=false;
    this.bottom=true;
    this.createUI();
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    let elem = videojs.dom.createEl('div', {
      className: `video-gradient-parent`,
    }) 
    return elem;
  }

  createUI() {
    let parent = this.el();

    if (this.top) {
      let topDiv = videojs.dom.createEl('div', {
        className: 'video-gradient-top',
      }) 
      parent.append(topDiv)
    }
    if (this.bottom) {
      let bottomDiv = videojs.dom.createEl('div', {
        className: 'video-gradient-bottom',
      }) 
      parent.append(bottomDiv)
    }
  }

}
export default VideoGradient;