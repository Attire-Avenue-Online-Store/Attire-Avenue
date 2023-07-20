import React from 'react';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="col-2 bg-dark ">
      <div className="container sidebar ">
        <div className="logo"></div>
        <ul className="menu">
          <li className="active">
            <a href="#" className="menu-button">
              <i className="fa fa-th"></i>
              <span>Overview</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-button">
              <i className="fa fa-area-chart"></i>
              <span>Analytics</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-button">
              <i className="fa fa-user"></i>
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-button">
              <i className="fa fa-users"></i>
              <span>Customer</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-button">
              <i className="fa fa-inbox"></i>
              <span>Products</span>
            </a>
          </li>
          <li>
            <a href="#" className="menu-button">
              <i className="fa fa-money"></i>
              <span>Orders</span>
            </a>
          </li>
          <li className="btn-settings">
            <a href="#" className="menu-button">
              <i className="fa fa-sliders"></i>
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
