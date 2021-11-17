import PropTypes from 'prop-types';

import defaultAvatar from 'defaults/default-avatar.png';
import classes from './FriendListItem.module.css';

const FriendListItem = ({
  friend: { avatar = defaultAvatar, name, isOnline },
}) => {
  const status = isOnline ? 'online' : 'offline';

  return (
    <li className={classes.item}>
      <span className={classes[status]}></span>
      <img className={classes.avatar} src={avatar} alt={name} width="48" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;
