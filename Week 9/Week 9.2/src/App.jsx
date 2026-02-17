import { useState, useEffect } from 'react'

function App() {

  let [counterVariable,setCounterVariable]=useState(true);
  let [dependencyTimer1,setDependencyTimer1]=useState(0);
  let [dependencyTimer2,setDependencyTimer2]=useState(0);
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym regularly",
      done: true,
    },
  ]);

  function addTodo() {
    let newArray = [];
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i]);
    }
    newArray.push({
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      done: true,
    });
    setTodos(newArray);
  }

  useEffect(()=>{
    setInterval(()=>{
      setCounterVariable((c)=>{
        return !c
      });
    },5000)
  },[]);

  function increasor(){
    setDependencyTimer1(dependencyTimer1+1);
  }

  function decreasor(){
    setDependencyTimer2(dependencyTimer2-1);
  }

  return (
    <div>
      <h1>Let's get started!!</h1>
      <Counter></Counter>
      {counterVariable ? <Mounting></Mounting> : null}
      <DependencyArray dependencyTimer1={dependencyTimer1} dependencyTimer2={dependencyTimer2}></DependencyArray>
      <button onClick={increasor}>Increase Dependency Timer 1</button>
      <button onClick={decreasor}>Decrease Dependency Timer 2</button>
      <br></br><br /><br /><br />
      <div>
        <input id="title" type="text" placeholder="Title"></input>
        <input id="description" type="text" placeholder="Description"></input>
        <br />
        <button onClick={addTodo}>Add todo</button>
        <br />
        {todos.map((todo) => (
          <Todo
            title={todo.title}
            description={todo.description}
            done={todo.done}
          />
        ))}
      </div>
    </div>
  )
  
}

function Counter(){
  const [count,setCount]=useState(0);

  function increaseCount(){
    setCount(count+1);
  }

  function decreaseCount(){
    setCount(count-1);
  }

  function resetCount(){
    setCount(0);
  }

  return (
    <div>
      <h1>Counter:- </h1>
      <h6 id="text">{count}</h6>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Decrease Count</button>
    </div>
  )

}

//Conditional Rendering - Sometimes you want to render, sometimes you don't want to render
function Mounting(){

  //mounting, re-rendering, unmounting
  const [timer,setTimer]=useState(0);

  //hooking into the lifecycle events of react

  useEffect(()=>{
    const interval=setInterval(()=>{
      setTimer(function(timer){
        return timer+1;
      });
    },1000);
    return function () { // Unmounting, Cleanup
      clearInterval(interval);
    }
  },[]) //Dependency array

  return (
    <div>
      <h1>Timer:-</h1>
      <h6>{timer}</h6>
    </div>
  )
}

function DependencyArray(props){
  useEffect(()=>{
    console.log("Mounted");
    return ()=>{
      console.log('Unmounted');
    }
  },[]);

  useEffect(()=>{
    console.log("Props.dependencyTimer changed");
    return function(){
      console.log("Cleanup done of Props.dependencyTimer"); //First cleanup done for useEffect and then dependencyTimer changed
    }
  },[props.dependencyTimer1,props.dependencyTimer2]);

  return (
    <div>
      Counter1 {props.dependencyTimer1}
      <br></br>
      Counter1 {props.dependencyTimer2}
    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h1>{props.done ? "Task is done" : "Task is not done"}</h1>
    </div>
  );
}

export default App;