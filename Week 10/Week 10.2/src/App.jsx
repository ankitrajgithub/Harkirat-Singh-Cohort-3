import React, {useState} from 'react';
import {Lightbulb} from './Lightbulb'
import {LightBulb} from './PropDrilling'
import {Light} from './ContextApi'
import {Recoil} from './Recoil'

export const BulbContext=React.createContext();
const CountContext=React.createContext();

function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>
      {children}
    </BulbContext.Provider>
  ) 
}

function CountProvider({children}){
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{
      count:count,
      setCount:setCount
    }}>
      {children}
    </CountContext.Provider>
  )

}

const App = () => {

  return <div>
    <CountProvider>
      <Parent/>
    </CountProvider>
    <br/><br/>
    <Lightbulb/>
    <br/><br/>
    <LightBulb/>
    <br/><br/>
    <BulbProvider>
      <Light/>
    </BulbProvider>
    <br/><br/>
    <Recoil/>
  </div>
};

function Parent() {

  return (
    <>
      <Increase/>
      <Decrease/>
      <Value/>
    </>
  );
}

function Decrease() {
  const {setCount}=React.useContext(CountContext);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Increase() {
  const {setCount}=React.useContext(CountContext);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const {count}=React.useContext(CountContext);
  return <p>Count: {count}</p>;
}

export default App;