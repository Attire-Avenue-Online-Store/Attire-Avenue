import Sidebar from './components/sidebar/sidebar';
import MainContentBox from './components/common/mainContentBox';
import SearchBox from './components/common/searchBox';
import MiniProfileImage from './components/common/miniProfileImage';
import HeaderTitle from './components/common/headerTitle';
import DashboardGrid from './components/common/dashboardGrid';

import './App.css';

function App() {
  return (
    // body

    <DashboardGrid
      sidebar={<Sidebar />}
      topbar={
        <MainContentBox
          content={
            <>
              <HeaderTitle windowName={'Dashboard'} />
              <div className="user-info">
                <SearchBox />
                <MiniProfileImage
                  imgUrl={
                    'https://gaveinjaz.com/wp-content/uploads/2019/12/opulent-profile-square-07.jpg'
                  }
                />
              </div>
            </>
          }
        ></MainContentBox>
      }
      content={<MainContentBox />}
    />
  );
}

export default App;
