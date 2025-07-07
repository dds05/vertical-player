"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import throttle from 'lodash.throttle';
import VideoPlayer from './VideoPlayer';
import DummyVideoPlayer from './DummyVideoPlayer';

interface Asset {
    src: string;
    type: string;
}

interface VideoData {
    id: string;
    tag: string;
    asset_url: string;
    description: string;
}

// const TEMP_DATA: VideoData[] = Array(9)
//     .fill(null)
//     .map((_, i) => ({
//         id: `${i + 1}`,
//         title: "Title",
//         permalink: "permalink",
//         asset: {
//             src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
//             type: 'video/mp4',
//         },
//         description: `Sample description ${i + 1}`,
//     }));


const TEMP_DATA: any = [
    {
        id: 1,
        tag: "META VERSE 5",
        asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
        description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia'
    },
    {
        id: 2,
        tag: "META VERSE 5",
        asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
        description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia'
    },
    {
        id: 3,
        tag: "META VERSE 5",
        asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
        description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia'
    },
    {
        id: 4,
        tag: "META VERSE 5",
        asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
        description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia'
    },
    {
        id: 5,
        tag: "META VERSE 5",
        asset_url: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4',
        description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia'
    },

];
const BATCH_SIZE = 2;
const MAX_VISIBLE_PLAYERS = 6;

const VerticalPlayer: React.FC<{ data?: any[] , handleLike:any, handleShare:any}> = ({ data,handleLike,handleShare }) => {
    const initialData = useMemo(() => (data?.length ? [...data] : TEMP_DATA), [data]);
    const [content, setContent] = useState<VideoData[]>(initialData);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const initialBatch = useMemo(
        () => (content.length === 1 ? [content[0]] : content.slice(0, BATCH_SIZE)),
        [content]
    );
    const [videoBatch, setVideoBatch] = useState<VideoData[]>(initialBatch);
    const [loadingMore, setLoadingMore] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const isWithinRange = useCallback(
        (index: number) => Math.abs(index - currentIndex) < Math.ceil(MAX_VISIBLE_PLAYERS / 2),
        [currentIndex]
    );

    const loadMoreVideos = useCallback(async () => {
        if (loadingMore) return;
        setLoadingMore(true);

        console.log('im trig');
        const remaining = content.length - videoBatch.length;
        if (remaining <= 0) {

            //      const newd:any= await getMOREVIDS();
            //      setContent((p)=>[...p,...newd])
                 setLoadingMore(false);
                 return

        }



        const nextBatch = content.slice(videoBatch.length, videoBatch.length + BATCH_SIZE);

        setTimeout(() => {
            setVideoBatch(prev => {
                const recent = prev.slice(-BATCH_SIZE);
                return prev.concat(nextBatch.filter(v => !recent.some(r => r.id === v.id)));
            });
            setLoadingMore(false);
        }, videoBatch.length === 1 ? 0 : 500);
    }, [loadingMore, content, videoBatch]);

    // ✅ Merged scroll event + direction tracking
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let lastScrollTop = 0;

        const throttledLoadMore = throttle(() => {
            const triggerIndex = videoBatch.length - 2;
            const triggerElement = container.children[triggerIndex] as HTMLElement;

            if (triggerElement && triggerElement.getBoundingClientRect().top < container.clientHeight) {
                loadMoreVideos();
            }
        }, 700);

        const debouncedScrollDirection = (() => {
            let timeout: NodeJS.Timeout;
            return () => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    const current = container.scrollTop;
                    if (Math.abs(current - lastScrollTop) > 200) {
                        setScrollPosition(current);
                    }
                    lastScrollTop = current <= 0 ? 0 : current;
                }, 50);
            };
        })();

        const onScroll = () => {
            throttledLoadMore();
            debouncedScrollDirection();
        };

        container.addEventListener('scroll', onScroll);
        return () => container.removeEventListener('scroll', onScroll);
    }, [videoBatch, loadMoreVideos]);

    // ✅ IntersectionObserver (separate for clarity)
    useEffect(() => {
        const container = containerRef.current;
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Array.from(container?.children || []).indexOf(entry.target);
                        setCurrentIndex(index);
                    }
                });
            },
            { root: container, threshold: 0.7 }
        );

        const elements = Array.from(container?.children || []);
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, [videoBatch]);



    const renderedVideos = useMemo(
        () =>
            videoBatch.map((element, index) => (
                <div className="content" key={element.id}>
                    {isWithinRange(index) ? (
                        <VideoPlayer
                            id={element.id}
                            handleShare={handleShare}
                            handleLike={handleLike}
                            asset_url={element?.asset_url}
                            metadata={{tag:element.tag,description:element.description}}
                            playing={index === currentIndex}
                            playerId={`video-player-${element.id}`}
                        />
                    ) : (
                        <DummyVideoPlayer />
                    )}
                </div>
            )),
        [videoBatch, currentIndex, isWithinRange]
    );

    return (
        <div className="vertical-container">
            <div style={{ height: '100%', width: '100%' }}>
                <div className="overlay-content">
                    <div className="video-content-area" ref={containerRef}>
                        {renderedVideos}
                        {(loadingMore || videoBatch.length < BATCH_SIZE) && (
                            <div className="loading-text">Loading more videos...</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalPlayer;
