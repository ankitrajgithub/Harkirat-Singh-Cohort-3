import {useSelector, useDispatch} from 'react-redux';
import { useState } from 'react';
import {Counter} from './components/Counter';
import {Users} from './components/Users';
import {setName} from './redux-toolkit/features/counter/counterSlice';

function App() {
  const dispatch=useDispatch();

  const [names,setname]=useState();

  const name=useSelector((state)=>{
    return state.counterReducer.name;
  });

  function setNames(){
    dispatch(setName(names));
  }

  return (
    <>
      <Counter/>
      <br/>
      <div>{name}</div>
      <input type="text" onChange={(e)=>setname(e.target.value)}/>
      <button onClick={setNames}>Change</button>
      <br/>
      <Users/>
    </>
  )
}

export default App
