import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-profile-img"
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input placeholder="What's in your mind?" className="share-input" />
        </div>

        <hr className="share-hr" />

        <div className="share-bottom">
          <div className="share-options">
            <div className="share-option">
              <PermMediaIcon htmlColor="green" className="share-option-icon" />
              <span className="share-option-text">Photo/Video</span>
            </div>
            <div className="share-option">
              <LabelIcon htmlColor="blue" className="share-option-icon" />
              <span className="share-option-text">Tag</span>
            </div>
            <div className="share-option">
              <RoomIcon htmlColor="tomato" className="share-option-icon" />
              <span className="share-option-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotionsIcon
                htmlColor="goldenrod"
                className="share-option-icon"
              />
              <span className="share-option-text">Feelings</span>
            </div>
          </div>
          <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
