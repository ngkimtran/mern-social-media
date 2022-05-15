import './leftbar.css';

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import { Users } from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="leftbar-wrapper">
        <ul className="leftbar-list">
          <li className="leftbar-list-item">
            <RssFeedIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Feed</span>
          </li>
          <li className="leftbar-list-item">
            <ChatIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Chats</span>
          </li>
          <li className="leftbar-list-item">
            <VideoLibraryIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Videos</span>
          </li>
          <li className="leftbar-list-item">
            <GroupIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Groups</span>
          </li>
          <li className="leftbar-list-item">
            <BookmarkIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Bookmarks</span>
          </li>
          <li className="leftbar-list-item">
            <HelpOutlineIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Questions</span>
          </li>
          <li className="leftbar-list-item">
            <WorkIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Jobs</span>
          </li>
          <li className="leftbar-list-item">
            <EventIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Events</span>
          </li>
          <li className="leftbar-list-item">
            <SchoolIcon className="leftbar-icon" />
            <span className="leftbar-list-item-text">Courses</span>
          </li>
        </ul>
        <button className="leftbar-button">Show more</button>
        <hr className="leftbar-hr" />
        <ul className="leftbar-friendlist">
          {Users.map((user) => (
            <CloseFriend key={user.id} friend={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
