import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Forms() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Digite seu Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicComentario">
        <Form.Label>O que deseja?</Form.Label>
        <Form.Control type="comentario" placeholder="Seu Comentario" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Forms;