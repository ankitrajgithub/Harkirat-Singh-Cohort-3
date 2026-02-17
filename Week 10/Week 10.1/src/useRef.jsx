import React, {useRef, useState, useEffect} from 'react';

//Focussing on an input box
export function FocusInput(){
    const inputRef=useRef();

    function focusOnInput(){
        // document.getElementById("email").focus();
        inputRef.current.focus();
    }

    return (
        <>
            Sign-In
            <input ref={inputRef} type="text" id="email" placeholder="Enter your Email"/>
            <input type="password" id="password" placeholder="Enter your Password"/>
            <button onClick={focusOnInput}>Submit</button>
        </>
    )
}

//Scroll to bottom

export function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
    console.log(messages);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

//Clock with start and stop functionality

// ugly code
function StopWatch() {
  const [time, setTime] = useState(0);
  let timer=0; // Use state to store the interval ID

  const startTimer = () => {

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
      console.log(timer);
    }, 1000);
  };

  const stopTimer = () => {
    console.log(timer);
    clearInterval(timer);
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

//Ugly code
export function Watch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Use state to store the interval ID

  const startTimer = () => {
    if (intervalId !== null) return; // Already running, do nothing
    const newIntervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    
    // Store the interval ID in state (triggers re-render)
    setIntervalId(newIntervalId); 
  }

  const stopTimer = () => {
    clearInterval(intervalId);

    // Clear the interval ID in state (triggers re-render)
    setIntervalId(null);
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

//Better Code
export function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Already running, do nothing

    intervalRef.current = setInterval(() => {
      console.log(intervalRef.current)
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    console.log(intervalRef.current)
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>Timer: {time}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
   );
}