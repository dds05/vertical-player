"use client"
import VerticalCarousel from "@/components/video_player/VerticalCarousel";



export default function Home() {
  const handleLike=(e)=>{
    console.log(e); 
  }
  const handleShare=(e)=>{
    console.log(e);
  }
  return (
    <VerticalCarousel handleLike={handleLike} handleShare={handleShare}  />
  );
}
