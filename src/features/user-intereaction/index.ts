import videojs from "video.js";
import "./index.css";
import {shareIcon } from "../../assets";
import { PlayerIdType } from "@/components/types/videojs";
import { getPlayer, parseSvgString } from "@/utils/generic";

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

        let icons = `
        <svg xmlns="http://www.w3.org/2000/svg" style = "display:none" >
           <defs>
              <symbol id="vjs-like-red"  viewBox="0 0 10 14" >
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99855 8.3555C10.0156 8.75952 9.88196 9.15182 9.60329 9.51777C9.65732 9.66708 9.7085 9.86909 9.71988 10.1062C9.73978 10.5161 9.64025 11.0987 9.07438 11.6257C9.11134 11.895 9.11134 12.3195 8.88101 12.747C8.57959 13.3061 7.98527 13.6867 7.11513 13.877C6.74546 13.959 6.30185 14 5.79285 14C5.49711 14 5.17863 13.9854 4.84024 13.959C2.97198 13.9971 1.15207 13.7599 1.0497 13.7453C1.0497 13.7453 0.1888 13.637 0.114155 13.1041C0.0395099 12.5713 -0.0155556 11.4354 0.00396475 9.96879C0.0234851 8.50214 0.114155 7.54454 0.1888 7.19322C0.260381 6.85632 0.557758 6.26223 0.819371 5.97825C0.833589 5.96361 0.847807 5.94898 0.864868 5.93726C1.75492 5.2317 2.80706 2.69051 3.18241 1.65412C3.1426 1.33208 3.10563 0.635299 3.42128 0.257633C3.56061 0.090757 3.75682 0 3.97009 0C4.19189 0 4.94545 0.0526976 5.41749 0.723128C5.86678 1.36136 5.88953 2.31577 5.49143 3.56294C5.15588 4.61104 5.1246 5.07654 5.13597 5.26391C5.28953 5.22877 5.44024 5.19657 5.58242 5.17022H5.58526L5.58545 5.17018C5.61372 5.16371 6.23816 5.02083 6.98432 4.98578C8.04783 4.93308 8.81561 5.12338 9.26774 5.54789C9.88481 6.12756 9.81371 6.87411 9.62888 7.34839C9.78812 7.56211 9.98149 7.9105 9.99855 8.3555Z" fill="red"/>
              </symbol>
              <symbol id ="vjs-like-white" viewBox="0 0 10 14" >
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99855 8.3555C10.0156 8.75952 9.88196 9.15182 9.60329 9.51777C9.65732 9.66708 9.7085 9.86909 9.71988 10.1062C9.73978 10.5161 9.64025 11.0987 9.07438 11.6257C9.11134 11.895 9.11134 12.3195 8.88101 12.747C8.57959 13.3061 7.98527 13.6867 7.11513 13.877C6.74546 13.959 6.30185 14 5.79285 14C5.49711 14 5.17863 13.9854 4.84024 13.959C2.97198 13.9971 1.15207 13.7599 1.0497 13.7453C1.0497 13.7453 0.1888 13.637 0.114155 13.1041C0.0395099 12.5713 -0.0155556 11.4354 0.00396475 9.96879C0.0234851 8.50214 0.114155 7.54454 0.1888 7.19322C0.260381 6.85632 0.557758 6.26223 0.819371 5.97825C0.833589 5.96361 0.847807 5.94898 0.864868 5.93726C1.75492 5.2317 2.80706 2.69051 3.18241 1.65412C3.1426 1.33208 3.10563 0.635299 3.42128 0.257633C3.56061 0.090757 3.75682 0 3.97009 0C4.19189 0 4.94545 0.0526976 5.41749 0.723128C5.86678 1.36136 5.88953 2.31577 5.49143 3.56294C5.15588 4.61104 5.1246 5.07654 5.13597 5.26391C5.28953 5.22877 5.44024 5.19657 5.58242 5.17022H5.58526L5.58545 5.17018C5.61372 5.16371 6.23816 5.02083 6.98432 4.98578C8.04783 4.93308 8.81561 5.12338 9.26774 5.54789C9.88481 6.12756 9.81371 6.87411 9.62888 7.34839C9.78812 7.56211 9.98149 7.9105 9.99855 8.3555Z" fill="white"/>
                 </path>
              </symbol>
           </defs>
        </svg>
        `


        const player = getPlayer(this.playerId)

        player?.el().insertBefore(parseSvgString(icons), player.el().firstChild ?? null);
        let like_interaction: any = videojs.dom.createEl("div", {
          className: "like-interaction",
          innerHTML: `<svg id="vjs-like-btn" height="16" width="16" viewBox="0 0 10 14" >
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
        innerHTML: shareIcon("white"),
      });
      share_interaction.onclick = () => {
        this.handleShare({name:'share',id:this.id});
      };
      videojs.dom.appendContent(head, share_interaction);
    }
  }
}

export default UserInteraction;


