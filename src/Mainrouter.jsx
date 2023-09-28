import React from 'react'
import Registraction from './Registraction'
import Login from './Login'
import Home from './Home'
import Data from './Data'
import { Route,Routes } from 'react-router-dom'

const Mainrouter = () => {
  return (
    <div>

<Routes>
<Route path='/' element={<Registraction/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Login/Home' element={<Home/>}/>
<Route path='/Login/Home/Data' element={<Data/>}/>




      </Routes>

    </div>
  )
}

export default Mainrouter