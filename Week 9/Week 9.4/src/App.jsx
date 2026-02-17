import { useState } from 'react'
import {List} from './Lists&Keys'
import {Card} from './Children'
import {MyComponent1,MyComponent2} from './LifeCycleEvents'
import {Boundary} from './ErrorBoundary'


function App() {

  const [isShown,setIsShown]=useState(true);

  useState(()=>{
      const timer=setInterval(()=>{
          setIsShown(isShown=>isShown=!isShown);
      },10000)
      return ()=>clearInterval(timer);
  },[])

  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This card has different content!</p>
      </Card>
      <List></List>
      <MyComponent1></MyComponent1>
      {isShown && <MyComponent2></MyComponent2>}
      <Boundary></Boundary>
    </div>
  );
}


export default App