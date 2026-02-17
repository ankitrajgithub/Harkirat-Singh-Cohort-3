import { useState, useEffect } from 'react'
import {PostComponent} from './Post'
import {NotificationBell} from './Notification'
import {Fetch} from './Fetch'

function App() {

  const [disappearTimer,setDisappearTimer]=useState(true);

  useEffect(()=>{
    const timer=setInterval(()=>{
      setDisappearTimer(disappearTimer=>disappearTimer=!disappearTimer);
    },10000);
    return ()=>clearInterval(timer);
  },[disappearTimer]);

  const [posts,setPosts]=useState([{
    name:"Ankit Raj",
    subtitle:"20k Followers",
    time:"20 min",
    image:"https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80",
    description:"This is my first post"
  }]);

  const postComponents=posts.map((post)=><PostComponent name={post.name} subtitle={post.subtitle} time={post.time} image={post.image} description={post.description}></PostComponent>)

  function addPost(){
    setPosts([...posts,{
    name:"Kashish Raj",
    subtitle:"15k Followers",
    time:"15 min",
    image:"https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740&q=80",
    description:"Hii there!!"
  }])
  }

  return (
    <div style={{background:"#dfe6e9", height:"100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>{postComponents}</div>
      </div>
      <br></br><br></br>
      <div>
        <ToggleMessage></ToggleMessage>
        <ToggleMessage></ToggleMessage>
        <ToggleMessage></ToggleMessage>
      </div>
      <br></br><br></br>
      <div>
        <NotificationCounter></NotificationCounter>
        <NotificationCounter></NotificationCounter>
        <NotificationCounter></NotificationCounter>
      </div>
      <br></br><br></br>
      <div>
        <NotificationBell></NotificationBell>
      </div>
      <br/><br/><br/>
      <Fetch></Fetch>
      <br/><br/><br/>
      {disappearTimer && <Timer></Timer>}
    </div>
  )
}

function ToggleMessage(){

  const [isVisible,setIsVisible]=useState(false);

  return (
    <div>
      <button onClick={()=>setIsVisible(!isVisible)}>Visibility</button>
      {isVisible && <div>
        <p>It is now conditionally rendered!!!</p>
      </div>}
    </div>
  )
}

function NotificationCounter(){

  const [notificationCount, setNotificationCount]=useState(0);

  function updateNotificationCount(){
    setNotificationCount(notificationCount+1);
  }

  return (
    <div>
      <button onClick={updateNotificationCount}>Notification {notificationCount}</button>
    </div>
  )
}

function Timer(){
  const [timer,setTimer]=useState(0);

  useEffect(()=>{
    const timer=setInterval(()=>{
      setTimer(timer=>timer+1);
    },1000);
    return ()=>clearInterval(timer);
  },[timer])

  return (
    <div>
      Current Time : {timer}
    </div>
  )
}

//Structuring your app into components
//Defining a state of your application
export default App