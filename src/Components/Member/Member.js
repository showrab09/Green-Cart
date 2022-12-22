import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Member = ({member}) => {
    const {name, img, Position} = member;
    return (
        <Col className="my-3">
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title> {name} </Card.Title>
            <Card.Text>
              <h4>Position: {Position} </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default Member;