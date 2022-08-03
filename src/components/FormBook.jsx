import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export function FormBook() {
  const [validated, setValidated] = useState(false);
  let [estados, setEstados] = useState([]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const fetchEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(data => {
        //console.log('estados', data)
        setEstados(data);

      })

  }


  useEffect(() => {
    console.log('useEffect')
    fetchEstados();
  }, [])

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {console.log('return')}
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Título</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Título do Livro"
          //defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Autor"
          //defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" placeholder="Cidade" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Estado</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Selecione...</option>
            {console.log('estados', estados)}
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Cep</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
  );
}

