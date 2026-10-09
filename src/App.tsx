import { useState } from 'react';
import { Home, Search, Clapperboard, Heart, PlusSquare, User, Menu, Send, Maximize2, X, Edit } from 'lucide-react';
import Feed from './components/Feed';
import Reels from './components/Reels';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);

  return (
    <div className="desktop-layout">
      <div className="sidebar-container">
        <nav className="sidebar">
          <div className="nav-items-top">
            <button className="nav-btn insta-logo-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
          </div>
          <div className="nav-items">
            <button onClick={() => setActiveTab('home')} className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}>
              <Home size={28} fill={activeTab === 'home' ? 'white' : 'none'} strokeWidth={activeTab === 'home' ? 2 : 1.5} />
              <span className="nav-text">Home</span>
            </button>
            <button onClick={() => setActiveTab('reels')} className={`nav-btn ${activeTab === 'reels' ? 'active' : ''}`}>
              <Clapperboard size={28} strokeWidth={1.5} />
              <span className="nav-text">Reels</span>
            </button>
            <button onClick={() => setActiveTab('messages')} className={`nav-btn ${activeTab === 'messages' ? 'active' : ''}`}>
              <Send size={28} className="rotate-icon" strokeWidth={1.5} />
              <span className="nav-text">Messages</span>
            </button>
            <button onClick={() => setActiveTab('search')} className={`nav-btn ${activeTab === 'search' ? 'active' : ''}`}>
              <Search size={28} strokeWidth={1.5} />
              <span className="nav-text">Search</span>
            </button>
            <button onClick={() => setActiveTab('notifications')} className={`nav-btn ${activeTab === 'notifications' ? 'active' : ''}`}>
              <div className="notification-icon-wrapper">
                <Heart size={28} strokeWidth={1.5} />
                <div className="red-dot"></div>
              </div>
              <span className="nav-text">Notifications</span>
            </button>
            <button onClick={() => setActiveTab('create')} className={`nav-btn ${activeTab === 'create' ? 'active' : ''}`}>
              <PlusSquare size={28} strokeWidth={1.5} />
              <span className="nav-text">Create</span>
            </button>
            <button onClick={() => setActiveTab('profile')} className={`nav-btn ${activeTab === 'profile' ? 'active' : ''}`}>
              <User size={28} strokeWidth={1.5} />
              <span className="nav-text">Profile</span>
            </button>
          </div>
          <div className="nav-items-bottom">
            <button className="nav-btn">
              <Menu size={28} strokeWidth={1.5} />
              <span className="nav-text">More</span>
            </button>
            <button className="nav-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <span className="nav-text">Also from Meta</span>
            </button>
          </div>
        </nav>
      </div>

      <main className="main-content">
        {activeTab === 'home' && <Feed />}
        {activeTab === 'reels' && <Reels />}
        {activeTab !== 'home' && activeTab !== 'reels' && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', color: 'var(--secondary-text)' }}>
            <h2>Section under construction</h2>
          </div>
        )}
      </main>

      {/* Messages Pill */}
      {!isMessagesOpen && (
        <div className="messages-pill" onClick={() => setIsMessagesOpen(true)}>
          <Send size={20} className="rotate-icon" />
          <span>Messages</span>
        </div>
      )}

      {/* Messages Box */}
      {isMessagesOpen && (
        <div className="messages-box">
          <div className="messages-box-header">
            <h3>Messages</h3>
            <div className="header-actions">
              <button><Maximize2 size={18} /></button>
              <button onClick={() => setIsMessagesOpen(false)}><X size={20} /></button>
            </div>
          </div>
          <div className="messages-box-body">
            <p>Chats will appear here after you send or receive a message</p>
          </div>
          <button className="edit-btn">
            <Edit size={20} />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
