import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import MainContentBox from './components/common/mainContentBox';
import SearchBox from './components/common/searchBox';
import MiniProfileImage from './components/common/miniProfileImage';
import HeaderTitle from './components/common/headerTitle';
import DashboardGrid from './components/common/dashboardGrid';
import Customer from './pages/customers/customer';
import User from './pages/users/users';
import React, { useState } from 'react';
import './App.css';
import Product from './pages/products/product';
import Order from './pages/orders/order';

function App() {
  const [headerTitle, setHeaderTitle] = useState('Dashboard');

  const handleTopBarTitle = (name) => {
    setHeaderTitle(name);
  };

  return (
    // body

    <DashboardGrid
      sidebar={<Sidebar onClick={handleTopBarTitle} />}
      topbar={
        <MainContentBox>
          <HeaderTitle windowName={headerTitle} />
          <div className="user-info">
            <SearchBox placeholder={'Global search...'} />
            <MiniProfileImage
              imgUrl={
                'https://gaveinjaz.com/wp-content/uploads/2019/12/opulent-profile-square-07.jpg'
              }
            />
          </div>
        </MainContentBox>
      }
      content={
        <MainContentBox>
          <Routes>
            <Route path="/customers" element={<Customer />} />
            <Route path="/users" element={<User />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
        </MainContentBox>
      }
    />
  );
}

export default App;
