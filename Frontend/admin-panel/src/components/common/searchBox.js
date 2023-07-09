import React from 'react';
import './css/searchBox.css';

const SearchBox = ({ keyword, onChange }) => {
  return (
    <div className="search-box">
      <i className="fa fa-search"></i>
      <input
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchBox;
