import React from 'react';

const handleClick = (link) => {
  return () => {
    chrome.tabs.create({active: true, url: link});

  };
};

const SearchItem = ({title, link, score}) => (
    <li onClick={handleClick(link)} className='search-li'>
      <h4 className='search-title'>{title}</h4>
      <div className='search-score'>Score: {score}</div>
      <hr className='search-hr'/>  
    </li>
);

export default SearchItem;
