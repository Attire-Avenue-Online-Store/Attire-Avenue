import React from 'react';
import './css/headerTitle.css';

const HeaderTitle = ({ windowName }) => {
  return (
    <div className="header-title">
      <span>Admin</span>
      <h2>{windowName}</h2>
    </div>
  );
};

export default HeaderTitle;
