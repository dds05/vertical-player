import videojs from "video.js";
import "./user-interaction.css";
import { likeIcon, shareIcon } from "../../assets";
import {parseSvgString } from "../../utils/generic";

const Component = videojs.getComponent("Component");

class userInteraction extends Component {
  constructor(player, options = {}) {
    super(player, options);
    this.playerId = player;
    this.options = options;
    console.log(options);
    this.showlikeBtn = options?.content?.btnOptions?.like?.enable ?? true; //remove hardcoding
    this.showShareBtn = options?.content?.btnOptions?.share?.enable ?? true; //remove hardcoding
    this.showCategoryButton = options?.content?.btnOptions?.category?.enable ?? true; //remove hardcoding
    this.categoryImage=options?.content?.primaryCategory?.gist?.imageGist?.r1x1;
    this.categoryLink=options?.content?.primaryCategory?.gist?.permalink;
    this.initialiseStructure(); 
  }

  // The `createEl` function of a component creates its DOM element.
  createEl() {
    let elem = videojs.dom.createEl("div", {
      className: "user-interaction-selection vjs-control",
    });
    return elem;
  }

  async initialiseStructure() {
    let head = this.el();
    if (this.showCategoryButton) {
      if(this.categoryImage){
        let category_interaction = videojs.dom.createEl("img", {
          className: "category-interaction",
          src:`${this?.categoryImage}`,
          alt:'category'
        });
        
        category_interaction.onclick = () => {
          if(this?.categoryLink)
            window.location.href=`${window.location.origin}${this.categoryLink}`
        };
        videojs.dom.appendContent(head, category_interaction);
      }
    }
    if (this.showlikeBtn) {
      try {
        let res = await this.options?.interaction?.getUserContentInfo(
          "video",
          this.options?.content?.id
        );
        
        let likeBtnState = res?.data?.isLiked ?? false;
    
        let likeIconColor = likeBtnState ? "red" : "white";
    
        let like_interaction = videojs.dom.createEl("div", {
          className: "like-interaction",
          innerHTML: likeIcon(likeIconColor), 
        });
    
        like_interaction.onclick = async () => {
          if (!likeBtnState) {
            try {
              let state=await this.options?.interaction?.like(this.options?.content?.id,false);
              console.log(state,'interaction_state');
              if(state){
                while (like_interaction.firstChild) {
                  like_interaction.removeChild(like_interaction.firstChild);
                }
                like_interaction.append(parseSvgString(likeIcon("red"))); 
                likeBtnState = true;
              }
            } catch (error) {
              console.error("Like action failed", error);
            }
          } else {
            try {
              let state=await this.options?.interaction?.like(this.options?.content?.id,true);
              console.log(state,'interaction_state');
              if(state){
              while (like_interaction.firstChild) {
                like_interaction.removeChild(like_interaction.firstChild);
              }
              like_interaction.append(parseSvgString(likeIcon("white"))); 
              likeBtnState = false;
             }
            } catch (error) {
              console.error("Unlike action failed", error);
            }
          }
        };
    
        videojs.dom.appendContent(head, like_interaction);
      } catch (error) {
        console.error("Failed to fetch like state", error);
        let likeBtnState = false;
        let likeIconColor = "white";
    
        let like_interaction = videojs.dom.createEl("div", {
          className: "like-interaction",
          innerHTML: likeIcon(likeIconColor), 
        });
    
        like_interaction.onclick = async () => {
          if (!likeBtnState) {
            try {
              let state=await this.options?.interaction?.like(this.options?.content?.id,false);
              console.log(state,'interaction_state');
              if(state){
              while (like_interaction.firstChild) {
                like_interaction.removeChild(like_interaction.firstChild);
              }
              like_interaction.append(parseSvgString(likeIcon("red"))); 
              likeBtnState = true;                
              }
            } catch (error) {
              console.error("Like action failed", error);
            }
          } else {
            try {
              await this.options?.interaction?.like(this.options?.content?.id);
              while (like_interaction.firstChild) {
                like_interaction.removeChild(like_interaction.firstChild);
              }
              like_interaction.append(parseSvgString(likeIcon("white"))); 
              likeBtnState = false;
            } catch (error) {
              console.error("Unlike action failed", error);
            }
          }
        };
    
        videojs.dom.appendContent(head, like_interaction);
      }
    }
    
  
    if (this.showShareBtn) {
      let share_interaction = videojs.dom.createEl("div", {
        className: "share-interaction",
        innerHTML: shareIcon("white"),
      });
      share_interaction.onclick = () => {
        this.options?.interaction?.share(this.options?.content?.title, this.options?.content?.permalink);
      };
      videojs.dom.appendContent(head, share_interaction);
    }
  }
}

export default userInteraction;


