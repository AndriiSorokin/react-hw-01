import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ stats }) => {
  return (
    <li>
      <span class="label">{stats.followers}</span>
      <span class="quantity">{stats.views}</span>
    </li>
  );
};

Stats.propsType = {
  stats: PropTypes.array,
};
export default Stats;
