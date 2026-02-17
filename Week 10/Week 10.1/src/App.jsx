import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {FocusInput, Stopwatch,Chat} from './useRef'

function App() {

  // const route=[{
  //   path:"/",
  //   element:<HomePage/>
  // }]

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}/>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
      <FocusInput></FocusInput>
      <br/>
      <Stopwatch></Stopwatch>
      <br/>
      <Chat/>
    </BrowserRouter>
  )
}

function Layout(){
  return (
    <div style={{height:"100vh", background:"gray"}}>
      <Link to="/">Allen</Link> | <Link to="/neet/online-coaching-class-11">Class 11</Link> | <Link to="/neet/online-coaching-class-12">Class 12</Link>
      <div style={{height:"90vh", background:"wheat"}}>
        <Outlet/>
      </div>
      <div>Footer | Contact US</div>
    </div>
  )
}

function Class11Program(){
  const navigate=useNavigate();
  
  function redirectUser(){
    navigate("/");
  }

  return (
    <>
      <h2>Class 11 Programs</h2>
      <button onClick={redirectUser}>Go back to landing page!!</button>
    </>
  )
}

function Class12Program(){
  return (
    <>
      <h2>Class 12 Programs</h2>
    </>
  )
}

function HomePage(){
  return (
    <>
      <h2>Home Page</h2>
    </>
  )
}

function ErrorPage(){
  return (
    <>
      <h1>Error!! Page not found!!</h1>
    </>
  )
}

export default App
