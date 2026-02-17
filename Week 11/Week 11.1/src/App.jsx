import {useState,useEffect} from 'react';
import {useCounter} from './hooks/UseCounterHook';
import {usePostTitle,useFetch} from "./hooks/UseFetchHook";
import {usePrev} from "./hooks/UsePrev";
import {useDebounce,useDebouncer} from './hooks/UseDebounce';

function App() {

  return (
    <>
      <Counter/>
      <br/>
      <FetchPostTitle/>
      <br/>
      <Fetch/>
      <br/>
      <Previous/>
      <br/>
      <Debounce/>
    </>
  )
}

function Counter(){
  const {count,increaseCount}=useCounter();

  return (
    <>
      <button onClick={increaseCount}>Counter {count}</button>
    </>
  )
}

function FetchPostTitle(){
  const {post}=usePostTitle();
  
  return (
    <>
      {post}
    </>
  )
}

function Fetch(){
  const [currentPost,setCurrentPost]=useState(1);
  const {data,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost,5);

  if(loading){
    return <div>
      Loading...
    </div>
  }

  return (
    <>
      <button onClick={()=>setCurrentPost(1)}>1</button>
      <button onClick={()=>setCurrentPost(2)}>2</button>
      <button onClick={()=>setCurrentPost(3)}>3</button>
      {JSON.stringify(data)}
    </>
  )
}

function Previous(){
  const [count,setCount]=useState(0);
  const {ref}=usePrev(count);

  return (
    <>
      <p>Current : {count}</p>
      <p>Previous : {ref}</p>
      <button onClick={()=>setCount(count+1)}>Increasor</button>
    </>
  )
}

function Debounce(){
  const [inputVal,setInputVal]=useState("");

  function sendDataToBackend(){
    fetch("api.amazon.com/search");
  }

  const debouncedFn=useDebouncer(sendDataToBackend);

  const debouncedValue=useDebounce(inputVal,200);

  function change(e){
    setInputVal(e.target.value);
  }

  useEffect(()=>{
    console.log("Expensive operation started...")
  },[debouncedValue]);

  return (
    <>
      <input type="text" onChange={debouncedFn}/>
      <input type="text" onChange={change}/>
    </>
  )
}



export default App