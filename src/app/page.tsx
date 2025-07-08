"use client"
import VerticalCarousel from "@/components/video_player/VerticalCarousel";



export default function Home() {
  const handleLike=(e)=>{
    console.log(e); 
  }
  const handleShare=(e)=>{
    console.log(e);
  }
  const TEMP_DATA: any = [
        {
            id: 1,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which basically describes the video'
        },
        {
            id: 2,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which basically describes the video'
        },
        {
            id: 3,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which basically describes the video'
        },
        {
            id: 4,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which basically describes the video'
        },
        {
            id: 5,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which basically describes the video'
        },
    
    ];
  return (
    <VerticalCarousel data={TEMP_DATA} handleLike={handleLike} handleShare={handleShare}  />
  );
}
