import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap/LinkContainer';

function App() {
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
