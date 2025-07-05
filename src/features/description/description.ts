import videojs from "video.js";
import './description.css'
const Component = videojs.getComponent('Component');


interface VideoDescription{
    description: String 
    tag: String
}

class VideoDescription extends Component {

    constructor(player:any, options:any) {
        super(player, options);
        this.description=options?.description || 'DESCRIPTION'
        this.tag=options?.tag || 'TAG'
        this.createUI();
    }

    // The `createEl` function of a component creates its DOM element.
    createEl() {
        let elem = videojs.dom.createEl('div', {
            className: `video-description-parent`,
        })
        return elem;
    }

    createUI() {
        let parent=this.el(); 
                
        if(this.tag){
            let tag = videojs.dom.createEl('div', {
                className: 'video-description-tag',
            })
            tag.textContent=`${this.tag}`
            parent.append(tag)
        }

        if(this.description){
            let text = videojs.dom.createEl('div', {
                className: 'video-description-text',
            })
            text.textContent=`${this?.description}`
            parent.append(text)
        }
    }
}

export default VideoDescription;




