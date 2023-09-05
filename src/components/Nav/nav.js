import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function NavScrollExample() {
  const color = 'blue';
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>TMDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>Home</NavLink>
            <NavLink to="movies" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>Movies</NavLink>
            <NavLink to="contactUs" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>Contact Us</NavLink>
            <NavLink to="aboutUs" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>About Us</NavLink>
            <NavLink to="join" className="nav-link" style={({ isActive }) => {
              return {
                color: (isActive) ? 'white':'',
                backgroundColor: (isActive) ? 'blue':'',
                borderRadius: '8px',
              }
            }}>join</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;