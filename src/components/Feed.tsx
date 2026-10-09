import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { posts, stories } from '../data';
import './Feed.css';

export default function Feed() {
  return (
    <div className="feed-wrapper">
      <div className="feed-main">
        <div className="stories-container no-scrollbar">
          {stories.map(story => (
            <div key={story.id} className="story-item">
              <div className={`story-ring ${story.isUser ? 'user-story' : ''}`}>
                <img src={story.image} alt={story.username} />
              </div>
              <span className="story-username">{story.username}</span>
            </div>
          ))}
        </div>

        <div className="posts-container">
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <div className="post-header-wrapper">
                <div className="post-header">
                  <div className="post-avatar-wrapper">
                     <img src={post.userImage} alt={post.username} className="post-avatar" />
                  </div>
                  <span className="post-username">{post.username}</span>
                  {post.verified && <span className="verified-badge"></span>}
                  <span className="post-time">• {post.time.toLowerCase().replace(' hours ago', 'h').replace(' mins ago', 'm')}</span>
                </div>
                <button className="post-options-btn"><MoreHorizontal size={20} /></button>
              </div>
              
              <div className="post-image-container">
                <img src={post.image} alt="post" />
              </div>
              <div className="post-actions">
                <div className="action-left">
                  <Heart size={26} className="icon-hover" />
                  <MessageCircle size={26} className="icon-hover" />
                  <Send size={26} className="icon-hover" />
                </div>
                <Bookmark size={26} className="icon-hover" />
              </div>
              <div className="post-info">
                <p className="likes">{post.likes} likes</p>
                <p className="caption">
                  <span className="caption-username">{post.username}</span> {post.caption}
                </p>
                <div className="add-comment">
                  <input type="text" placeholder="Add a comment..." />
                  <button>Post</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="feed-sidebar">
         <div className="user-profile-mini">
            <img src="https://i.pravatar.cc/150?img=11" alt="me" />
            <div className="user-text">
               <strong>boringtp2026</strong>
               <span>Boring</span>
            </div>
            <button>Switch</button>
         </div>
         <div className="suggestions">
            <div className="sug-header">
               <span>Suggested for you</span>
               <button>See all</button>
            </div>
            <div className="sug-item">
               <img src="https://i.pravatar.cc/150?img=12" alt="user" />
               <div className="sug-text">
                 <strong>Arko</strong>
                 <span>Suggested for you</span>
               </div>
               <button>Follow</button>
            </div>
            <div className="sug-item">
               <img src="https://i.pravatar.cc/150?img=33" alt="user" />
               <div className="sug-text">
                 <strong>syed dadapeer</strong>
                 <span>Suggested for you</span>
               </div>
               <button>Follow</button>
            </div>
            <div className="sug-item">
               <div className="sug-initial">T</div>
               <div className="sug-text">
                 <strong>Threshold Renewal</strong>
                 <span>Suggested for you</span>
               </div>
               <button>Follow</button>
            </div>
            <div className="sug-item">
               <img src="https://i.pravatar.cc/150?img=44" alt="user" />
               <div className="sug-text">
                 <strong>kayleeonthedaylee23</strong>
                 <span>Suggested for you</span>
               </div>
               <button>Follow</button>
            </div>
            <div className="sug-item">
               <div className="sug-icon"><UserIcon /></div>
               <div className="sug-text">
                 <strong>934ga_milcom</strong>
                 <span>Suggested for you</span>
               </div>
               <button>Follow</button>
            </div>
         </div>
         
         <div className="sidebar-footer">
            <div className="footer-links">
               <a href="#">About</a> • <a href="#">Help</a> • <a href="#">Press</a> • <a href="#">API</a> • <a href="#">Jobs</a> • <a href="#">Privacy</a> • <a href="#">Terms</a> • <a href="#">Locations</a> • <a href="#">Language</a>
            </div>
            <p className="copyright">© 2026 RANGAGRAM FROM META</p>
         </div>
      </div>
    </div>
  );
}

function UserIcon() {
   return (
      <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32" style={{color: '#a8a8a8'}}>
         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
   );
}
