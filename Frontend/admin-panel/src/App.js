import './App.css';

function App() {
  return (
    // body
    <div className="container-fluid">
      <div className="row d-flex">
        {/*Column 1-  sidebar */}
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
                  <i className="fa fa-area-chart"> </i>
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

        <div class="col ">
          {/* Column 2 - content area*/}
          <div class="row ">
            {/* this bar naver change */}
            <div class="col">
              <div className="main-content">
                <div className="header-wrapper">
                  <div className="header-title">
                    <span>Primary</span>
                    <h2>Dashboard</h2>
                  </div>
                  <div className="user-info">
                    <div className="search-box">
                      <i className="fa fa-search"></i>
                      <input type="text" placeholder="Search" />
                    </div>
                    <img
                      src="https://gaveinjaz.com/wp-content/uploads/2019/12/opulent-profile-square-07.jpg"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">Content Area</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
