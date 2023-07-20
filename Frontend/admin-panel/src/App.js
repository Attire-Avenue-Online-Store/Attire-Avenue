import { Route, Redirect, Switch } from 'react-router-dom';
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

  return (
    // body

    <DashboardGrid
      sidebar={<Sidebar />}
      topbar={
        <MainContentBox>
          <HeaderTitle windowName={'Dashboard'} />
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
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
          <Customer />
        </MainContentBox>
      }
    />
  );
}

export default App;
