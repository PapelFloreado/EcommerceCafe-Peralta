import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./ContactForm.css"



function ContactForm() {
  return (
    <Container className="container-form col-4">
        <h1>Contacto</h1>
        <h3>Dejanos tu mensaje y te contactaremos...</h3>
            <div>
              <InputGroup className="contact-form mb-3">
              <InputGroup.Text>Nombre y Apellido</InputGroup.Text>
              <Form.Control aria-label="First name" />
              <Form.Control aria-label="Last name" />
              </InputGroup>
            </div>
            <div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Dejá tu mensaje</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button className='button btn m-1'>Resetar Formulario</button>
              <button className='button btn'>Enviar</button>
            </div>
    </Container>
  );
}

export default ContactForm;