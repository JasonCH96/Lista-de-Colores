import React from 'react';
import './Colores.css'
import { ListGroup, Card } from 'react-bootstrap';

const Colores = () => {
  const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Negro', 'Morado', 'Celeste', 'Naranja'];

  return (
    <div className="App">
      <Card className="shadow p-4 mx-auto" style={{ maxWidth: '400px', borderRadius: '10px', backgroundColor: '#f8f9fa' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>Lista de Colores</Card.Title>
          <ListGroup>
            {colores.map((color, index) => (
              <ListGroup.Item key={index}>{color}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Colores;