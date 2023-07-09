import React from 'react';
import './css/mainContentBox.css';

const MainContentBox = ({ content }) => {
  return (
    <div className="content-box">
      <div className="content-wrapper">{content}</div>
    </div>
  );
};

export default MainContentBox;
