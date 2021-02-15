import React from 'react';

const Stats = ({stats}) => {
  return (
    <li>
      <span class="label">{stats.followers}</span>
      <span class="quantity">{ stats.views}</span>
    </li>

  );
};

export default Stats;