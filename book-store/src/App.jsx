import './App.css'
import Home from './Components/Home'
import Register from "./Components/Register"
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <>
      <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
