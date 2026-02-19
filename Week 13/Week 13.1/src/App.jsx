import {Css} from './components/CSS';
import {Grid} from './components/Grid';
import {Page1} from './components/Page1'
import {Page4} from './components/Page4'

function App() {

  return (
    <div className='h-screen bg-blue-900 flex justify-center items-center'>
      <Css/>
      <br/>
      <Grid/> 
      <br/>
      <div className="xl:bg-green-300 md:bg-yellow-500 sm:bg-black sm:text-white bg-white text-3xl rounded-xl">Hello there</div>
      <br/> 
      <Page1 disable={true} type={"text"} placeholder={"Username"}>Continue</Page1>
      <Page4 number={20}/>
    </div>
  )
}

export default App
