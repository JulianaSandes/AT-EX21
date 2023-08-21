import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import imgRodape from '../assets/logo-rodape.png'; 

function NavRodape() {
  return (
    <>
    <Navbar className='container-rodape'>
      <Container>
        <img className='imgRodape' src={imgRodape} alt="" />
        <h1 className='textName'>EsperaçaTech</h1>
        <h1 className='text-rodape'>© 2023 Copyright: Juliana Sandes & Felipe Chiozzotto</h1>
      </Container>
    </Navbar>
  </>
  );
}

export default NavRodape;