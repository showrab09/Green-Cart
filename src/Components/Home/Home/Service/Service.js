import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, price, img, type, id } = service;
  return (
    <Col className="my-3">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}  </Card.Title>
          <Card.Text>
            <h4>Price: {price} Rupee {type} </h4>
            <Link to={`/services/${name}`} ><Button> See Details </Button></Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;