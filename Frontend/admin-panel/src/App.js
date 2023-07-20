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
            <Route path="/customers" component={Customer} />
            <Route path="/users" component={User} />
          </Routes>
          <Customer />
        </MainContentBox>
      }
    />
  );
}

export default App;
