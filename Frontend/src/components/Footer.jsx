import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default function Footer () {
  return (
    <footer className="py-5">
      <Container>
        <Row className="text-white g-4">
          <Col md={6} lg={3}>
          <LinkContainer to="/">
          
          <Navbar.Brand href="#home">Attire Avenue</Navbar.Brand>

            </LinkContainer>
            
            <p className="text-white text-muted mt-3">Attire Avenue is your ultimate destination for fashionable clothing and accessories. We offer a wide selection of trendy and high-quality apparel for men and women carefully curated to cater to your unique styles. With our diverse range of styles, from casual everyday wear to elegant formal attire, Attire Avenue has something for everyone</p>
          </Col>

          <Col md={6} lg={3}>
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none text-muted">
                  <i className="fas fa-chevron-right me-1"></i> Home
                </a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none text-muted">
                  <i className="fas fa-chevron-right me-1"></i> Collection
                </a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none text-muted">
                  <i className="fas fa-chevron-right me-1"></i> Blogs
                </a>
              </li>
              <li className="my-3">
                <a href="#" className="text-white text-decoration-none text-muted">
                  <i className="fas fa-chevron-right me-1"></i> About Us
                </a>
              </li>
            </ul>
          </Col>

          <Col md={6} lg={3}>
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="fas fa-map-marked-alt"></i>
              </span>
              <span className="fw-light">
                Faculty of Technology, University of Srijayewardhanepura, Pitipana
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="fw-light">
                attireavenue22@gmail.com
              </span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <i className="fas fa-phone-alt"></i>
              </span>
              <span className="fw-light">
                +94786401568
              </span>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <h5 className="fw-light mb-3">Follow Us</h5>
            <div>
              <ul className="list-unstyled d-flex">
                <li>
                  <a href="#" className="text-white text-decoration-none text-muted fs-4 me-4">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none text-muted fs-4 me-4">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none text-muted fs-4 me-4">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none text-muted fs-4 me-4">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

