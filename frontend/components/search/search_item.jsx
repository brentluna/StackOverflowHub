import React from 'react';

const SearchItem = ({title, link, score}) => (
  <a href={link} >
    <li>
      <h4>{title}</h4>
      <span>Score: {score}</span>
    </li>
  </a>
);

export default SearchItem;
