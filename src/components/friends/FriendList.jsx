import css from 'components/friends/friends.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClassName = isOnline ? css.online : css.offline;

  return (
    <li className={css.item}>
      <span className={statusClassName}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

export default FriendList;
