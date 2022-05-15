import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Reactsocial</span>
        </Link>
      </div>

      <div className="topbar-center">
        <div className="searchbar">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search for friends, post or video"
            className="search-input"
          />
        </div>
      </div>

      <div className="topbar-right">
        <div className="topbar-links">
          <span className="topbar-link">Homepage</span>
          <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icon">
            <PersonIcon />
            <span className="topbar-icon-badge">1</span>
          </div>
          <div className="topbar-icon">
            <ChatBubbleIcon />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon">
            <NotificationsIcon />
            <span className="topbar-icon-badge">1</span>
          </div>
        </div>
        <div className="topbar-profile">
          <img
            src="/assets/person/1.jpeg"
            alt=""
            className="topbar-profile-img"
          />
          <span className="topbar-profile-name">Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
