import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import Following from '../following/Following';

const Rightbar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-img" src={`${PF}gift.png`} alt="" />
          <span className="birthday-text">
            <strong>Pola Foster</strong> and <strong>3 other friends</strong>{' '}
            have their birthdays today.
          </span>
        </div>
        <img className="rightbar-ad" src={`${PF}ad.png`} alt="" />
        <h4 className="rightbar-title">Online friends</h4>
        <ul className="rightbar-friendlist">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City: </span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From: </span>
            <span className="rightbar-info-value">{user.hometown}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship: </span>
            <span className="rightbar-info-value">
              {user.relationship === 1
                ? 'Single'
                : user.relationship === 2
                ? 'In a relationship'
                : 'Not specified'}
            </span>
          </div>
        </div>

        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          {Users.map((user) => (
            <Following key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
