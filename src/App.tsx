import { useState } from 'react'

import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Homepage/Home/Home'
import Navbar from './Components/Homepage/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)


  // async function asd(){
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // }
  // asd()
  return (
    <>
  
<Routes>
  <Route path='/' element={<Home/>}/>
</Routes>
    </>
  )
}

export default App
