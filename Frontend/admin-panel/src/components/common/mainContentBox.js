import React from 'react';
import './css/mainContentBox.css';

const MainContentBox = ({ children }) => {
  return (
    <div className="content-box">
      <div className="content-wrapper">{children}</div>
    </div>
  );
};

export default MainContentBox;
