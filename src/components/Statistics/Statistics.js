import React from 'react';
import StatisticList from '../StatisticList/StatisticList';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div className="statistic-block">
      <h2>{title}</h2>
      <ul className="statistic-list">
        {stats.map(value => (
          <StatisticList key={value.id} {...value} />
        ))}
      </ul>
    </div>
  );
};

Statistics.propsType = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
};

export default Statistics;

