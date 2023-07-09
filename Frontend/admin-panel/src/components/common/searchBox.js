import React from 'react';
import './css/searchBox.css';

const SearchBox = ({ keyword, onChange, placeholder }) => {
  return (
    <div className="search-box">
      <i className="fa fa-search"></i>
      <input
        type="text"
        placeholder={placeholder}
        value={keyword}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchBox;
