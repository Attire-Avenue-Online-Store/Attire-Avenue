import Container from 'react-bootstrap/Container';
import LinkContainer from 'react-router-bootstrap/LinkContainer';
import Navbar from 'react-bootstrap/Nav';


function SpecialOffers() {
  return (
    <Navbar bg="primary" variant="primary">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Attire Avenue</Navbar.Brand>
        </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default SpecialOffers;
