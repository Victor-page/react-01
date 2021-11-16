// import FriendListItem from './FriendListItem';

const FriendList = (friends) => {
  return (
    <ul class="friend-list">
      {friends.map((friend) => {
        return <FriendListItem />;
      })}
    </ul>
  );
};

export default FriendList;
