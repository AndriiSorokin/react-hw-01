import React from 'react';

const StatisticList = ({ label, percentage }) => {
  console.log(label);
  return (
    <li className="statistics-item">
      {label} {percentage}%
    </li>
  );
};

export default StatisticList;
