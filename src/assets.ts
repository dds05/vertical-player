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
  
    
  export {playIcon,BigPlayIcon}