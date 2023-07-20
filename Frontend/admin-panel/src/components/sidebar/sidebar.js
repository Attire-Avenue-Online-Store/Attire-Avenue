import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ onClick }) => {
  return (
    <div className="col-2 bg-dark ">
      <div className="container sidebar ">
        <div className="logo"></div>
        <ul className="menu">
          <li className="active">
            <Link
              to="/overview"
              className="menu-button"
              onClick={() => onClick('Dashboard')}
            >
              <i className="fa fa-th"></i>
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="menu-button"
              onClick={() => onClick('Analytics')}
            >
              <i className="fa fa-area-chart"></i>
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="menu-button"
              onClick={() => onClick('System Users')}
            >
              <i className="fa fa-user"></i>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className="menu-button"
              onClick={() => onClick('Customer Details')}
            >
              <i className="fa fa-users"></i>
              <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="menu-button"
              onClick={() => onClick('Product Details')}
            >
              <i className="fa fa-inbox"></i>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="menu-button"
              onClick={() => onClick('Order Details')}
            >
              <i className="fa fa-money"></i>
              <span>Orders</span>
            </Link>
          </li>
          <li className="btn-settings">
            <Link
              to="/"
              className="menu-button"
              onClick={() => onClick('Settings')}
            >
              <i className="fa fa-sliders"></i>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
