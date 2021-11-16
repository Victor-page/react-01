const FriendListItem = ({ avatar, name, isOnline }) => {
  const spanClass = isOnline ? 'online' : 'offline';

  return (
    <li class="item">
      <span class={spanClass}></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
