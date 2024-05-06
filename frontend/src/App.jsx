import React from 'react'
import Counter from './Counter'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Add from './Add'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Counter/>}/>
      <Route path='/Add' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App