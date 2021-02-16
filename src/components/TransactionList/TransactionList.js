import React from 'react';
import PropTypes from 'prop-types';

const TransactionList = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionList.propsType = {
  type: PropTypes.string.isRequired,
  amout: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionList;
