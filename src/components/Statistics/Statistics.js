import React from 'react';
import StatisticList from './StatisticList';
import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <div className={style.statisticBlock}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.statisticList}>
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
