import React from 'react';
import './css/searchBox.css';

const SearchBox = ({ keyword }) => {
  return (
    <div className="search-box">
      <i className="fa fa-search"></i>
      <input type="text" placeholder="Search" value={keyword} />
    </div>
  );
};

export default SearchBox;
