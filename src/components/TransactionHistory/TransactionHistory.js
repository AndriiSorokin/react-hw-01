import React from 'react';
import TransactionItem from './TransactionList';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(value => (
          <TransactionItem key={value.id} {...value} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propsType = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
