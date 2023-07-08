import React from 'react';
import './css/MainContentBox.css';

const MainContentBox = ({ content }) => {
  return (
    <div className="content-box">
      <div className="content-wrapper">{content}</div>
    </div>
  );
};

export default MainContentBox;
