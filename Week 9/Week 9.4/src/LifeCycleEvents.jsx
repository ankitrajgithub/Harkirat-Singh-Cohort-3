//Class component lifecycle events

import React, { useState, useEffect } from 'react';
export class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

//Functional component lifecycle events

export function MyComponent2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count updated');
  }, [count]); // Runs on mount and when count changes

	useEffect(() => {
        console.log('Component mounted');
    return () => {
        console.log('Component will unmount');
    };
	}, [])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}