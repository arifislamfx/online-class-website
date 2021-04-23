import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart/Cart';
import Courses from './components/Courses/Courses';
import data from './components/data/data.json'
import Header from './components/Header/Header';




function App() {

  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
      setCourses(data)
  },[])

  const addCart =(course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  }

  

  return (
    <div className="App"> 

     <Header cart={cart} />
     

     <div className="main">
       <div>
     <Cart cart={ cart } />
       </div>
     <div>
     <h2 className="header-text text-center mb-2">Find The Best Popular Courses in 2021</h2>
     <Container>
     <Row>
       {
         courses.map(course => <Courses course={course} addCart={addCart}  key={course.id} /> )
       }
     </Row>
     </Container>
     </div>
    
     </div>
    <div className="footer">
      <p className="lead text-center"> <span> &#169;</span>  All rights reserved by Ariful Islam. </p>
    </div>

    </div>
  );
}

export default App;
