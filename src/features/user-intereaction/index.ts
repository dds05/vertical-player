import videojs from "video.js";
import "./index.css";
import { likeIcon, shareIcon } from "../../assets";
import { PlayerIdType } from "@/components/types/videojs";

const Component = videojs.getComponent("Component");

class UserInteraction extends Component {
  showlikeBtn: boolean;
  showShareBtn: boolean;
  playerId: PlayerIdType;
  id: any;

  constructor(player: any, options = {}) {
    super(player, options);    
    this.playerId = player;
    this.id = options.id;

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

        let like_interaction: any = videojs.dom.createEl("div", {
          className: "like-interaction",
          innerHTML: likeIcon(likeIconColor),
        });

        like_interaction.onclick = () => {
          console.log('like clicked',this.id);
        };

        videojs.dom.appendContent(head, like_interaction);
      } catch (error) {

      }
    }


    if (this.showShareBtn) {
      let share_interaction: any = videojs.dom.createEl("div", {
        className: "share-interaction",
        innerHTML: shareIcon("white"),
      });
      share_interaction.onclick = () => {
        console.log('share clicked',this.id);
      };
      videojs.dom.appendContent(head, share_interaction);
    }
  }
}

export default UserInteraction;


