import React from 'react';
import './Courses.css';
import { Button, Card, Col } from 'react-bootstrap';

const Courses = (props) => {
    const {title, image, author, rating, price } = props.course;
    
    const addCart = props.addCart;

    return (
        <div>
          <Col md={4}>   
            <div className="card-box">
             <Card className="mt-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title> <h6>{title}</h6></Card.Title>
                <Card.Text>
                <p>Instructor: {author} </p> 
                <p> {rating} </p>
                <p> ${price} </p>
                </Card.Text>
                <Button onClick={() => addCart(props.course)} variant="primary">Enroll Now</Button>
            </Card.Body>
            </Card>
             </div>
           
            </Col>  
        </div>
    );
};

export default Courses;