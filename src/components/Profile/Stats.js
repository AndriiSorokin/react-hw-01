import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ stats }) => {
  return (
    <li>
      <span>{stats.followers}</span>
      <span>{stats.views}</span>
    </li>
  );
};

Stats.propsType = {
  stats: PropTypes.array,
};
export default Stats;
