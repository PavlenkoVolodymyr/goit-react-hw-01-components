import PropTypes from 'prop-types';
import s from './FriendList.modules.sass';
import FriendItem from '../FriendListItem/FriendListItem';

function FriendList({ friendlist = [] }) {
  return (
    <ul className={s.list}>
      {friendlist.map(el => (
        <FriendItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          key={el.id}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
