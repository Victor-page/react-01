import PropTypes from 'prop-types';

import TransactionHistoryRow from './TransactionHistoryRow/TransactionHistoryRow';
import classes from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={classes.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, currency, amount }) => (
          <TransactionHistoryRow
            key={id}
            amount={amount}
            currency={currency}
            type={type}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
