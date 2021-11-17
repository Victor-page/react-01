import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';
import classes from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={classes.friendList}>
      {friends.map((friend) => {
        return <FriendListItem key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
