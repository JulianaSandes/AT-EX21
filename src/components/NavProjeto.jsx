import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imgLogo from '../assets/logo.png';

function NavProjeto() {
  return (
    <>
      <Navbar className='nav'>
      <img  className='logo' src={imgLogo} alt="logo" />
      <h1 className='titulo-nav'>EsperançaTech</h1>
        <Container>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Sobre">Sobre</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavProjeto;