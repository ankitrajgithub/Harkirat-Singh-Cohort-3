import { useSelector, useDispatch } from 'react-redux'
import { addToProduct } from './redux/action/productAction'
import { counterAction } from './redux/action/counterAction'
import {cartAction} from './redux/action/cartAction'

function App() {

  return (
    <>
      <Products/>
      <br/>
      <Counter/>
      <br/>
      <Cart/>
    </>
  )
}

function Counter(){
  const dispatch = useDispatch();

  const count=useSelector((state)=>{
    return state.productReducer.counter;
  });

  function addCounter() {
    dispatch(counterAction());
  }

  return (
    <>
      <button onClick={addCounter}>Increase Counter</button>
      {count}
    </>
  )
}

function Products(){
  const dispatch = useDispatch();

  const product = useSelector((state) => {
    return state.productReducer.products;
  });

  function handleAddToProduct() {
    dispatch(addToProduct({
      id: 1,
      "name": "samsung"
    }));
  }

  return (
    <>
      <button onClick={handleAddToProduct}>Click</button>
      {JSON.stringify(product)}
    </>
  )
}

function Cart(){
  const dispatch=useDispatch();

  const cart=useSelector((state)=>{
    return state.cartReducer.cart;
  });

  function addToCart(){
    dispatch(cartAction({
      "Cart":"Apples added to cart"
    }));
  }

  return (
    <>
      <button onClick={addToCart}>Add to Cart</button>
      {JSON.stringify(cart)}
    </>
  )
}

export default App;