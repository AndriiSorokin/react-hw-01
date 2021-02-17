import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const StatisticList = ({ label, percentage }) => {
  return (
    <li className={style.statisticsItem}>
      {label} {percentage}%
    </li>
  );
};

StatisticList.propsType = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticList;
