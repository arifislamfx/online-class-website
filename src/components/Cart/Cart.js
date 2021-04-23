import { Button } from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    
  const cart  = props.cart;
  console.log(cart)

  const totalPrice = cart.reduce( (sum, course) => sum + course.price, 0 );
  const newPrice = totalPrice.toFixed(2);

    return (
        <div className="cart_price fixed-top mb-5">
            <p>Total course: { cart.length } </p>
            <p>Total Price: ${ newPrice } </p> 
            <Button>Checkout</Button>
        </div>
    );
};

export default Cart;