import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavRodape() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="/">Clique e volte ao topo</Navbar.Brand>
        <Nav className="ms-auto">
          <p class="text-rodape">© 2023 Copyright: Juliana Sandes</p>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default NavRodape;