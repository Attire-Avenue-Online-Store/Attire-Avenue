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

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
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
          <Navbar bg="primary" variant="primary" className="first-navbar">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Attire Avenue</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
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
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
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
