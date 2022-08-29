import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./ContactForm.css"



function ContactForm() {
  return (
    <Container className="container-form">
        <h1>Contacto</h1>
        <h3>Dejanos tu mensaje y te contactaremos...</h3>
            <div>
              <InputGroup className="contact-form mb-3">
              <InputGroup.Text>First and last name</InputGroup.Text>
              <Form.Control aria-label="First name" />
              <Form.Control aria-label="Last name" />
              </InputGroup>
            </div>
    </Container>
  );
}

export default ContactForm;