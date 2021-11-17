import PropTypes from 'prop-types';

import classes from './Profile.module.css';
import defaultAvatar from 'defaults/default-avatar.png';

const Profile = ({
  username,
  tag,
  location,
  avatar = defaultAvatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="User avatar" className={classes.avatar} />
        <p className={classes.name}>{username}</p>
        <p className={classes.tag}>@{tag}</p>
        <p className={classes.location}>{location}</p>

        <ul className={classes.stats}>
          <li className={classes.statItem}>
            <span className={classes.label}>Followers</span>
            <span className={classes.quantity}>{followers}</span>
          </li>
          <li className={classes.statItem}>
            <span className={classes.label}>Views</span>
            <span className={classes.quantity}>{views}</span>
          </li>
          <li className={classes.statItem}>
            <span className={classes.label}>Likes</span>
            <span className={classes.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
