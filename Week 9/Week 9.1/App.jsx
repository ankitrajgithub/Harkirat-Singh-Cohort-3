import React from 'react'

function App() {

  return (
    <div>
      <Button></Button>
    </div>
  )
}

function Button(props) {
  // const stateVariable=React.useState(0);
  // const count=stateVariable[0];
  // count setCount=stateVariable[1];
  const [count, setCount] = React.useState(0);

  function onButtonClick() {
    setCount(count + 1);
  }

  return React.createElement(
    'button',
    { onClick: onButtonClick },
    `Counter ${count}`
  );
}

export default App