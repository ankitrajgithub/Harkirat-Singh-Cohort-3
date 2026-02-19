import { useState,useEffect } from 'react';
import {SidebarClass1} from './components/answers/1-basic-project';
import {Sidebar2transition} from './components/sidebars/Sidebar2';
import {Sidebar3Transition} from "./components/sidebars/Sidebar3";
import {Sidebar1} from './components/sidebars/Sidebar1';
import {Sidebar4} from './components/sidebars/Sidebar4';
import {SidebarToggle} from './components/icons/SidebarToggle';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sidebarOpen,setSidebarOpen]=useState(true);
  const isDesktop=useMediaQuery("(min-width:768px)");

  console.error(isDesktop)
  
  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className='flex'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <MainContent/>
    </div>
  )
}

function Sidebar({sidebarOpen,setSidebarOpen}){

  if(sidebarOpen){
    return <div className='w-69 h-screen bg-red-100 fixed top-0 left-0 md:relative md:w-20'>
      <div className="cursor-pointer hover:bg-slate-200" onClick={()=>{
        setSidebarOpen(!sidebarOpen);
      }}>
        <SidebarToggle/>
      </div>
    </div>
  }

  if(!sidebarOpen){ 
    return <div className="fixed top-0 left-0">
      <div className='h-screen bg-red-100 '>
        <div className="cursor-pointer hover:bg-slate-200" onClick={()=>{
          setSidebarOpen(!sidebarOpen);
        }}>
          <SidebarToggle/>
        </div>
      </div>
    </div>
  }
}

function MainContent(){
  return <div className="w-full">
    <div className='h-32 bg-black hidden md:block'></div>
    <div className="grid grid-cols-10 md:gap-8 gap-4 p-8">
      <div className='h-69 rounded-2xl shadow-lg bg-red-200 md:col-span-2 -translate-y-12 col-span-11 hidden md:block'>
        <img/>
      </div>
      <div className='h-96 rounded-2xl shadow-lg bg-green-200 md:col-span-6 col-span-11'>

      </div>
      <div className='h-96 rounded-2xl shadow-lg bg-yellow-200 md:col-span-2 col-span-11'>

      </div>
    </div>
  </div>
}

export default App


//className='h-screen bg-white text-black dark:bg-blue-800 dark:text-white'
{/* <SidebarClass1/> */}
      {/* <Sidebar1/> */}
      {/* <Sidebar2transition/> */}
      {/* <Sidebar3Transition/> */}
      <Sidebar4/>
      {/* <h1>Toggle Theme</h1>
      <button className='border-2 border-black' onClick={toggleTheme}>Toggle Button</button>
      <br/>
      <button onClick={()=>{
        document.querySelector("html").classList.toggle("dark");
      }}>Another toggler</button> */}