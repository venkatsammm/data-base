import React from 'react'
import Counter from './Counter'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Add from './Add'
import DoorList from './Table'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Counter/>}/>
      <Route path='/Add' element={<Add/>}/>
      <Route path='/door' element={<DoorList/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App