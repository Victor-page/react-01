import PropTypes from 'prop-types';

import defaultAvatar from 'defaults/default-avatar.png';

const FriendListItem = ({
  friend: { avatar = defaultAvatar, name, isOnline },
}) => {
  const spanClass = isOnline ? 'online' : 'offline';

  return (
    <li className="item">
      <span className={spanClass}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
