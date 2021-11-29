import PropTypes from 'prop-types';
import s from './FriendList.module.scss';
import FriendItem from '../FriendListItem/FriendListItem';

function FriendList({ friendlist = [] }) {
  return (
    <ul className={s.list}>
      {friendlist.map(el => (
        <FriendItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friendlist: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
