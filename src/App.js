import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import data from './components/data/data.json'
import Header from './components/Header/Header';


function App() {
  console.log(data);

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

     <h2 className="header-text text-center">Find The Best Popular Courses in 2021</h2>
     <h3>
       {
         courses.map(course => <Courses course={course} addCart={addCart}  key={course.id} /> )
       }
     </h3>
    </div>
  );
}

export default App;
