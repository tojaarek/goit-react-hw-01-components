import css from 'components/friends/friends.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
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

FriendList.propTypes = {
  friends: PropTypes.array,
};

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const statusClassName = isOnline ? css.online : css.offline;

  return (
    <li key={id} className={css.item}>
      <span className={statusClassName}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
