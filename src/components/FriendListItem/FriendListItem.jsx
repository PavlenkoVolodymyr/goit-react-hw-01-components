import PropTypes from 'prop-types';
import s from './FriendListItem.module.sass';

function FriendItem({ avatar, name, isOnline = false }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusOn : s.statusOff}></span>
      <img class={avatar} src="{avatar}" alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}
FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendItem;
