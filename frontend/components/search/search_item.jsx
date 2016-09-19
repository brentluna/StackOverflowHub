import React from 'react';

const handleClick = (link) => {
  return () => {
    chrome.tabs.create({active: true, url: link});

  };
};

const SearchItem = ({title, link, score}) => (
    <li onClick={handleClick(link)}>
      <h4>{title}</h4>
      <span>Score: {score}</span>
    </li>
);

export default SearchItem;
