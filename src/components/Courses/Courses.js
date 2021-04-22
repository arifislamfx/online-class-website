import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Courses = (props) => {
    const {title, image, author, rating, price } = props.course;
    
    const addCart = props.addCart;

    return (
        <div>
            <Container >
                <Row>
                <Col >
            <Card className="m-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> <h3>{title}</h3></Card.Title>
                <Card.Text>
                <h5>Instructor: {author} </h5> 
                <p> {rating} </p>
                <p> {price} </p>
                </Card.Text>
                <Button onClick={() => addCart(props.course)} variant="primary">Enroll Now</Button>
            </Card.Body>
            </Card>
            </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Courses;