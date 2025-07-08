// const arrowDown = (color = 'white') = >{
//   return < svg width = "12"height = "16"viewBox = "0 0 12 16"fill = "none"xmlns = "http://www.w3.org/2000/svg" > <path d = "M6 1.3335L6 14.6668M6 14.6668L11 9.66683M6 14.6668L1 9.66683"stroke = {
//     color
//   }
//   stroke - width = "1.5"stroke - linecap = "round"stroke - linejoin = "round" / ></svg>
// }


// const arrowUp = (color = 'white') => {
//     return <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http:/ / www.w3.org / 2000 / svg ">
//         <path d="M6 14.6668L6 1.3335M6 1.3335L1 6.3335M6 1.3335L11 6.3335 " stroke={color} stroke-width="1.5 " stroke-linecap="round " stroke-linejoin="round " />
//     </svg>
// }
// "
  
const likeIcon = (color)=> {
  return `<svg width="16" height="16" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99855 8.3555C10.0156 8.75952 9.88196 9.15182 9.60329 9.51777C9.65732 9.66708 9.7085 9.86909 9.71988 10.1062C9.73978 10.5161 9.64025 11.0987 9.07438 11.6257C9.11134 11.895 9.11134 12.3195 8.88101 12.747C8.57959 13.3061 7.98527 13.6867 7.11513 13.877C6.74546 13.959 6.30185 14 5.79285 14C5.49711 14 5.17863 13.9854 4.84024 13.959C2.97198 13.9971 1.15207 13.7599 1.0497 13.7453C1.0497 13.7453 0.1888 13.637 0.114155 13.1041C0.0395099 12.5713 -0.0155556 11.4354 0.00396475 9.96879C0.0234851 8.50214 0.114155 7.54454 0.1888 7.19322C0.260381 6.85632 0.557758 6.26223 0.819371 5.97825C0.833589 5.96361 0.847807 5.94898 0.864868 5.93726C1.75492 5.2317 2.80706 2.69051 3.18241 1.65412C3.1426 1.33208 3.10563 0.635299 3.42128 0.257633C3.56061 0.090757 3.75682 0 3.97009 0C4.19189 0 4.94545 0.0526976 5.41749 0.723128C5.86678 1.36136 5.88953 2.31577 5.49143 3.56294C5.15588 4.61104 5.1246 5.07654 5.13597 5.26391C5.28953 5.22877 5.44024 5.19657 5.58242 5.17022H5.58526L5.58545 5.17018C5.61372 5.16371 6.23816 5.02083 6.98432 4.98578C8.04783 4.93308 8.81561 5.12338 9.26774 5.54789C9.88481 6.12756 9.81371 6.87411 9.62888 7.34839C9.78812 7.56211 9.98149 7.9105 9.99855 8.3555Z" fill="${color}"/>
  </svg>`
  }


const shareIcon = (color) => {

  return `<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7C0 6.96548 0.00174889 6.93137 0.00516289 6.89776C0.0563729 6.3935 0.482233 6 1 6H5C5.55228 6 6 6.44772 6 7C6 7.55228 5.55228 8 5 8H2V16H14V8H11C10.4477 8 10 7.55228 10 7C10 6.44772 10.4477 6 11 6H15C15.5523 6 16 6.44772 16 7V17C16 17.5523 15.5523 18 15 18H1C0.447715 18 0 17.5523 0 17V7Z" fill="${color}" />
  <path d="M8 1L5 4M8 1L11 4M8 1V12.6" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

  

  const BigPlayIcon=()=>{
    return `<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="white"  class="bi bi-play" viewBox="0 0 16 16">
         <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
      </svg>`
  }
  
  const playIcon = () => {
    return `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http:/ / www.w3.org / 2000 / svg ">
    <path fill-rule="evenodd " clip-rule="evenodd " d="M6.5 14.2539C6.5 15.0268 7.33937 15.5076 8.00601 15.1165L15.0623 10.9768C15.7135 10.5948 15.7227 9.65656 15.0791 9.26184L8.02283 4.934C7.35652 4.52533 6.5 5.00479 6.5 5.78644V14.2539Z " fill="white "/>
    </svg>`
  }
  
  const gameIcon=()=>{
    return `<svg width="21 " height="20 " viewBox="0 0 21 20 " fill="none " xmlns="http: //www.w3.org/2000/svg">
    < path fill - rule = "evenodd"clip - rule = "evenodd"d = "M6.5 14.2539C6.5 15.0268 7.33937 15.5076 8.00601 15.1165L15.0623 10.9768C15.7135 10.5948 15.7227 9.65656 15.0791 9.26184L8.02283 4.934C7.35652 4.52533 6.5 5.00479 6.5 5.78644V14.2539Z"fill = "white" / ></svg>`
  }
    
  export {arrowDown,arrowUp,likeIcon,shareIcon,BigPauseIcon,playIcon,gameIcon,BigPlayIcon}