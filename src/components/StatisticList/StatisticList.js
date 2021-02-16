import React from 'react';
import PropTypes from 'prop-types';

const StatisticList = ({ label, percentage }) => {
  return (
    <li className="statistics-item">
      {label} {percentage}%
    </li>
  );
};

StatisticList.propsType = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticList;
