import { Navbar, Container, Nav } from 'react-bootstrap';

function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar-dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about" className="navbar-dark">Sobre</Nav.Link>
              <Nav.Link href="/contact" className="navbar-dark">Contate-nos</Nav.Link>
              <Nav.Link href="/cart" className="navbar-dark">Cart</Nav.Link>
              <Nav.Link href="/login" className="navbar-dark">Login</Nav.Link>
            </Nav>
            {/*Exemplo de imagem na Navbar*/}
          <Navbar.Brand href="/">
            <img
                src="https://www.gratistodo.com/wp-content/uploads/2016/10/Bob-Esponja-1.jpeg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
