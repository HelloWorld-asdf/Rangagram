import React, { useEffect, useRef, useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Music } from 'lucide-react';
import { reels } from '../data';
import './Reels.css';

export default function Reels() {
  return (
    <div className="reels-container no-scrollbar">
      {reels.map(reel => (
        <ReelItem key={reel.id} reel={reel} />
      ))}
    </div>
  );
}

function ReelItem({ reel }: { reel: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(e => console.log("Autoplay prevented", e));
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="reel-item">
      <div className="reel-video-container" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={reel.video}
          className="reel-video"
          loop
          playsInline
          muted // Muted initially to allow autoplay without interaction
        />
        
        {!isPlaying && (
          <div className="play-icon">
            <div className="triangle"></div>
          </div>
        )}

        <div className="reel-overlay">
          <div className="reel-info">
            <div className="reel-user">
              <img src={reel.userImage} alt={reel.username} className="reel-avatar" />
              <span className="reel-username">{reel.username}</span>
              <button className="reel-follow-btn">Follow</button>
            </div>
            <p className="reel-caption">{reel.caption}</p>
            <div className="reel-song">
              <Music size={14} />
              <div className="marquee">
                 <span>{reel.song}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Desktop side actions */}
      <div className="reel-actions-desktop">
        <div className="reel-action-btn-wrapper">
          <div className="reel-action-btn">
            <Heart size={24} />
          </div>
          <span className="action-count">{reel.likes}</span>
        </div>
        
        <div className="reel-action-btn-wrapper">
          <div className="reel-action-btn">
            <MessageCircle size={24} />
          </div>
          <span className="action-count">{reel.comments}</span>
        </div>
        
        <div className="reel-action-btn-wrapper">
          <div className="reel-action-btn">
            <Send size={24} />
          </div>
        </div>
        
        <div className="reel-action-btn-wrapper">
          <div className="reel-action-btn">
            <Bookmark size={24} />
          </div>
        </div>
        
        <div className="reel-action-btn-wrapper">
          <div className="reel-action-btn">
            <MoreHorizontal size={24} />
          </div>
        </div>
        
        <div className="reel-music-disk">
           <img src={reel.userImage} alt="music" />
        </div>
      </div>
    </div>
  );
}
