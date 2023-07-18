import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap/LinkContainer';
import { useContext } from 'react';
import { Store } from './Store';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShippingAddressScreen';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
  };

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <div
            className="announcement-bar"
            role="region"
            aria-label="Announcement"
          >
            <a
              href="frontend\src\screens\SpecialOffers.js"
              className="announcement-bar_link"
            >
              <p className="announcement-bar_message">GET 50% OFF</p>
            </a>
          </div>
          <Navbar
            expand="lg"
            bg="primary"
            variant="primary"
            className="bg-body-tertiary"
          >
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand href="#home">Attire Avenue</Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <NavDropdown title="Men" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Shorts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      T-Sirts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Jogger Pants
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Best Sellers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Women" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/4.1">
                      Legging
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.2">
                      Traveller Pant
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.3">
                      Shorts
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/4.4">
                      Best Sellers
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#questions">Questions?</Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}

                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    class="icon icon-cart"
                    viewBox="0 0 37 40"
                  >
                    <path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path>
                  </svg>
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
