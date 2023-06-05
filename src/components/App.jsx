import user from 'components/profile/user.json';
import Profile from 'components/profile/Profile.jsx';
import data from 'components/stats/data.json';
import Statistics from 'components/stats/Statistics.jsx';
import friends from 'components/friends/friends.json';
import FriendsList from 'components/friends/FriendList.jsx';
import transactions from 'components/transactions/transactions.json';
import TransactionHistory from 'components/transactions/TransactionHistory.jsx';
import css from 'components/app.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
