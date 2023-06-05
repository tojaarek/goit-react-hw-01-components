import css from 'components/profile/profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.username}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.element}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.element}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.element}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
