import PropTypes from 'prop-types';
import s from './Transaction-history.module.scss';

function TransactionHistory({ transactions }) {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.line}>Type</th>
          <th className={s.line}>Amount</th>
          <th className={s.line}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(el => (
          <tr key={el.id} className={s.row}>
            <td className={s.line}>{el.type}</td>
            <td className={s.line}>{el.amount}</td>
            <td className={s.line}>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
