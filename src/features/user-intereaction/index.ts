import videojs from "video.js";
import "./index.css";
import { PlayerIdType } from "@/components/types/videojs";
import { getPlayer } from "@/utils/generic";

const Component = videojs.getComponent("Component");

class UserInteraction extends Component {
  showlikeBtn: boolean;
  showShareBtn: boolean;
  playerId: PlayerIdType;
  id: any;
  handleShare:any;
  handleLike:any

  constructor(player: any, options = {}) {
    super(player, options);
    this.playerId = options.playerId;
    this.id = options.id;
    this.handleShare= options.handleShare
    this.handleLike=options.handleLike

    this.showlikeBtn = true; //remove hardcoding
    this.showShareBtn = true; //remove hardcoding
    this.initialiseStructure();
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    let elem = videojs.dom.createEl("div", {
      className: "vjs-user-interaction vjs-control",
    });
    return elem;
  }

  async initialiseStructure() {
    let head = this.el();

    if (this.showlikeBtn) {
      try {
        let likeBtnState = false
        let likeIconColor = likeBtnState ? "red" : "white";



        const player = getPlayer(this.playerId)

        let like_interaction: any = videojs.dom.createEl("div", {
          className: "like-interaction",
          innerHTML: `<svg id="vjs-like-btn" height="24" width="24" viewBox="0 0 24 24" >
                        <use href="#vjs-like-white"></use>
                      </svg>`
        });


        const icon = like_interaction.querySelector('#vjs-like-btn use');

        like_interaction.onclick = () => {
          if (!likeBtnState) {
            icon?.setAttribute('href', '#vjs-like-red')
            likeBtnState = true;      
            this.handleLike({status:true,name:'like',id:this.id});
          } else {
            icon?.setAttribute('href', '#vjs-like-white')
            likeBtnState = false;
            this.handleLike({status:false,name:'unlike',id:this.id});
          }
        };

        videojs.dom.appendContent(head, like_interaction);
      } catch (error) {

      }
    }

    if (this.showShareBtn) {
      let share_interaction: any = videojs.dom.createEl("div", {
        className: "share-interaction",
        innerHTML: `<svg id="vjs-like-btn" height="24" width="24" viewBox="0 0 24 24" >
                        <use href="#vjs-share-icon"></use>
                      </svg>`,
      });
      share_interaction.onclick = () => {
        this.handleShare({name:'share',id:this.id});
      };
      videojs.dom.appendContent(head, share_interaction);
    }
  }
}

export default UserInteraction;


