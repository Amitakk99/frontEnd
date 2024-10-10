import React from 'react'
import Home from './component/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singleemp from './component/Singleemp'
import Updateemp from './component/Updateemp'
import Addemp from './component/Addemp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/singleemp/:id' element={<Singleemp />} />
          <Route path='/updateemp/:id' element={<Updateemp />} />
          <Route path='/addemployee' element={<Addemp />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
