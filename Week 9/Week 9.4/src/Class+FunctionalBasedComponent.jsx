import { Component, useState } from 'react';

//Class-based Component - A class-based component in React is a JavaScript ES6 class that extends React.Component 
//and includes a render() method to return HTML (JSX). They were historically used for managing state and accessing 
// lifecycle methods, but modern React development now favors functional components with Hooks. 

class ClassCounter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

//Functional Component - Functional components in React are JavaScript functions that accept props as input 
//and return JSX to render UI, serving as the modern standard for building components. They are lightweight, 
//concise, and easy to test, typically using hooks like useState and useEffect to manage state and lifecycle events.

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    
    function increment() {
	    setCount(count => count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};