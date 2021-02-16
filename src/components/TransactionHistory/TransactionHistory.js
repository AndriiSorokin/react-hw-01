import React from 'react';
import TransactionList from '../TransactionList/TransactionList';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(value => (
          <TransactionList key={value.id} {...value} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propsType = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
