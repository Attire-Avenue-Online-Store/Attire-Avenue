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

        <div class="col">
          {/* Column 2 - content area*/}
          <div class="row">
            {/* this bar naver change */}
            <div class="col">
              <div className="topbar-title">
                <span>Primary</span>
                <h2>Dashboard</h2>
              </div>
            </div>
            <div class="col">
              <div className="search-box">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="text" />
              </div>
            </div>
            <div class="col">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                  alt=""
                ></img>
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
