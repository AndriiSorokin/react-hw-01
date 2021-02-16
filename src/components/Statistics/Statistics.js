import React from 'react';
import StatisticList from '../StatisticList/StatisticList';

const Statistics = ({ title, stats }) => {
  console.log(title);
  console.log(stats);
  return (
    <div className="statistic-block">
      <h2>{title}</h2>
      <ul className="statistic-list">
        {stats.map(el => (
          <StatisticList key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
