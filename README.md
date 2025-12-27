##  Vertical Player
A video.js based video player built with Next.js, focused on immersive, scrollable vertical video playback (similar to TikTok/Reels).
## 👉🏻 Installation  
```
npm install vertical-player
```

## 👨🏻‍💻 Usage 
```
"use client"
import {VerticalPlayer} from 'vertical-player/esm/index.es.js';


export default function Home() {
  const handleLike=(e)=>{
    console.log(e); 
  }

  const handleShare=(e)=>{
    console.log(e);
  }

  const DATA: any = [
        {
            id: 1,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which describes the video'
        },
        {
            id: 2,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which describes the video'
        },
        {
            id: 3,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which describes the video'
        },
        {
            id: 4,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which describes the video'
        },
        {
            id: 5,
            tag: "BRAND",
            asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
            description: 'This is a simple description which describes the video'
        },
    
    ];
  return (
    <VerticalPlayer data={DATA} handleLike={handleLike} handleShare={handleShare}  />
  );
}

```

## 👉🏻 Options

| Option  | Type     | Required | Description                                                                                                                                                                              |
| ------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`  | `object[]` | ✅ Yes    | Array of objects containing url of the asset and metadata: id, title, description |
| `handleLike` | `fn()` | ❌ No     | Callback fn emitted when like button is clicked                                                                                        
| `handleShare` | `fn()` | ❌ No     | Callback fn emitted when share button is clicked     

<br>


## ❤️ Support
https://buymeacoffee.com/dds05


