import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap/LinkContainer';
import { useContext, useEffect, useState } from 'react';
import { Store } from './Store';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import Button from 'react-bootstrap/Button';
import { getError } from './utils';
import axios from 'axios';

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? 'd-flex flex-column site-container active-cont'
            : 'd-flex flex-column site-container'
        }
      >
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
              <Button
                variant="dark"
                onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
              >
                <i className="fas fa-bars"></i>
              </Button>

              <LinkContainer to="/">
                <Navbar.Brand href="#home">Attire Avenue</Navbar.Brand>
              </LinkContainer>

              <Navbar.Toggle aria-controls="basic-navbar-nav ml-auto" />
              <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                <Nav className="me-auto w=100 justify-content-end">
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

              <SearchBox />

              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  <FaShoppingCart />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>
                        <FaUser />
                        User Profile
                      </NavDropdown.Item>
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
                    <FaUser />
                    Sign In
                  </Link>
                )}
              </Nav>
            </Container>
          </Navbar>
        </header>

        <div
          className={
            sidebarIsOpen
              ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
              : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={{
                    pathname: "/search",
                    search: `?category=${category}`,
                  }}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
              </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />}></Route>
              <Route
                path="/orderhistory"
                element={<OrderHistoryScreen />}
              ></Route>
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />}></Route>
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
