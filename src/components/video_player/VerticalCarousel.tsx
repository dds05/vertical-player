"use client"

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import VideoPlayer from './VideoPlayer';
import throttle from 'lodash.throttle';
import DummyVideoPlayer from './DummyVideoPlayer';


const temp: any = [
    { id: "1", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
    { id: "2", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
    { id: "3", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
    { id: "4", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
    { id: "5", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
    { id: "6", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
];

const BATCH_SIZE = 4;
const MAX_VISIBLE_PLAYERS = 10;


const defaultInteractions = {
    like: (id) => {
        return new Promise((resolve, reject) => {
            console.log(`LIKE/UNLIKE Clicked for ${id}`);
            resolve({ message: `Successfully liked ${id}` });
        });
    },
    share: (title, permalink) => console.log(`SHARE Clicked for title ${title} and permalink ${permalink}`),
    getUserContentInfo: (contentType, contentID) => {
        console.log(`Fetching info for ${contentType} and id ${contentID}`);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        isLiked: true,
                        contentType,
                        contentID,
                    }
                });
            }, 500);
        });
    }
};


const VerticalPlayer = ({ data, initIndex = 0, interactions = defaultInteractions }: any) => {

    data = data && data.length ? data.slice(initIndex) : temp;

    const [content, setContent] = useState(data)
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(initIndex);
    let initailVideoBatch;
    if (data.length == 1) {
        initailVideoBatch = [data[0]]
    } else {
        initailVideoBatch = data.slice(0, BATCH_SIZE);
    }
    const [videoBatch, setVideoBatch] = useState(initailVideoBatch); // Initial batch of videos
    const [loadingMore, setLoadingMore] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const isWithinRange = useCallback(
        (index) => {
            return Math.abs(index - currentIndex) < Math.ceil(MAX_VISIBLE_PLAYERS / 2);
        },
        [currentIndex]
    );

    // Loading more videos when scrolling near the bottom
    const [flag, setFlag] = useState(true)
    const loadMoreVideos = async () => {

        if (loadingMore) return;
        setLoadingMore(true);

        const remainingVideos = content.length - videoBatch.length;

        if (remainingVideos <= 0) {
            const timeToCallRecommendation = videoBatch.length >= content.length;
            if (timeToCallRecommendation) {
                // getting Recommendation Data
                // await callRecommendation();
            }

            setLoadingMore(false);
            return;
        }
        if (flag) {
            setContent(prev => [...prev, { id: "7", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
            { id: "8", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
            { id: "9", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
            { id: "10", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
            { id: "11", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },
            { id: "12", title: "Title2", permalink: "permalink3", asset: { src: 'https://www.exit109.com/~dnn/clips/RW20seconds_2.mp4', type: 'video/mp4' }, description: 'Fairway to Heaven Episode 1: Fireballs Captain Sergio Garcia' },]);
            setFlag(false)
        }


        const nextBatchSize = Math.min(BATCH_SIZE, remainingVideos);
        const nextBatch = content.slice(videoBatch.length, videoBatch.length + nextBatchSize);

        if (nextBatch.length > 0) {
            setTimeout(() => {
                setVideoBatch((prevBatch) => {
                    const recentBatch = prevBatch.slice(-BATCH_SIZE);
                    const newBatch = prevBatch.concat(
                        nextBatch.filter(video => !recentBatch.some(v => v.id === video.id))
                    );
                    console.log(newBatch);

                    return newBatch;
                });

                setLoadingMore(false);
            }, videoBatch.length === 1 ? 0 : 500);
        } else {
            setLoadingMore(false);
        }
    };





    const handleScroll = useCallback(
        throttle(() => {
            if (containerRef.current) {
                if (videoBatch.length === 1) {
                    loadMoreVideos()
                }
                const { clientHeight } = containerRef.current;
                const triggerPoint = videoBatch.length - 2;

                const contentElements = containerRef.current?.children;
                if (contentElements && contentElements[triggerPoint]) {
                    const triggerElement = contentElements[triggerPoint];
                    const rect = triggerElement.getBoundingClientRect();
                    if (rect.top < clientHeight) {
                        loadMoreVideos();
                    }
                }
            }
        }, 700),
        [videoBatch, loadingMore, content]
    );


    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    const renderedVideos = useMemo(() => {
        return videoBatch.map((element, index) => {
            if (isWithinRange(index)) {
                return (
                    <div className="content" key={element.id}>

                        <VideoPlayer
                            videoSrc={element.asset}
                            playing={index == currentIndex}
                            playerId={`video-player-${element.id}`}
                        />
                    </div>
                );
            } else {
                return (
                    // <div key={element.id}>d</div>
                    <div className="content" key={element.id}>
                        <DummyVideoPlayer />
                    </div>
                );
            }
        });
    }, [videoBatch, currentIndex, interactions, isWithinRange, scrollPosition]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(containerRef.current?.children || []).indexOf(entry.target);
                        setCurrentIndex(index);
                    }
                });
            },
            { root: containerRef.current, threshold: 0.7 }
        );

        const contentElements = containerRef.current?.children || [];
        Array.from(contentElements).forEach((element) => observer.observe(element));

        return () => {
            Array.from(contentElements).forEach((element) => observer.unobserve(element));
        };
    }, [renderedVideos, videoBatch]);

    useEffect(() => {

        let lastScrollTop = 0;
        function debounce(fn, delay) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => fn(...args), delay);
            };
        }
        containerRef.current.addEventListener(
            "scroll",
            debounce(() => {
                let currentScrollTop = containerRef.current.scrollTop;
                if (currentScrollTop > lastScrollTop) {
                    // if (scrollAnalytics)
                    // scrollAnalytics('DOWN')
                    // if (Math.abs(currentScrollTop - lastScrollTop) > 200) {
                    // setScrollPosition(currentScrollTop);
                    // }
                } else {
                    // scrollAnalytics)
                    // scrollAnalytics('UP')
                    if (Math.abs(currentScrollTop - lastScrollTop) > 200) {
                        setScrollPosition(currentScrollTop);
                    }
                }
                lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
            }, 50)
        );
    }, [])



    return (
        <div className='vertical-container'>
            <div style={{ height: "100%", width: "100%" }}>
                <div className="overlay-content">
                    <div className="video-content-area" ref={containerRef}>
                        {renderedVideos}
                        {loadingMore || videoBatch.length < BATCH_SIZE && (
                            <div className="loading-text">
                                Loading more videos...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalPlayer;
