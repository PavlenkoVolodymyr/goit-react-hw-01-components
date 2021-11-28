// import './App.css';
import friends from './components/FriendList/friends.json';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import transactions from './components/Transaction-history/transactions.json';

import FriendList from './components/FriendList/FriendList';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/Transaction-history/Transaction-history';
// import { element } from 'prop-types';

function App() {
  return (
    <div>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />;
      </div>
      <div>
        <FriendList friendlist={friends} />
      </div>
      <div>
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
