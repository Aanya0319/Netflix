import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="netflix-brand"
        >
          Netflix
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" className="nav-text">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="nav-text">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blog" className="nav-text">
            Blog
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;