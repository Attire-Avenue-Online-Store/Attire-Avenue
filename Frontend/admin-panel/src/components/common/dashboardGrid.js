import React from 'react';
import './css/dashboardGrid.css';

const DashboardGrid = ({ sidebar, topbar, content }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        {sidebar}

        <div class="col ">
          <div class="row ">
            <div class="col">{topbar}</div>
          </div>

          <div class="row">
            <div class="col">{content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
