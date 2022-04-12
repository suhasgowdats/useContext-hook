import React from 'react'
import { Routes, Route, NavLink} from "react-router-dom"
import Input from './Input'
import Tabel from './Tabel'
import './Component.css'
import Edit from './Edit'
import View from './View'

function Component() {
  return (
    <div>
      <div className='header'>
        <NavLink className='align' to={'/'}><button className='btn-header'>Tabel</button></NavLink>
        <NavLink className='align' to={"/input"}><button className='btn-header'>Add Data</button></NavLink>
      </div>
      <div className='body'>
         <Routes>
           <Route path='/' element={<Tabel/>}/>
           <Route path='/input' element={<Input/>}/>
           <Route path='/edit/:id' element={<Edit/>}/>
           <Route path='/view/:id' element={<View/>}/>
         </Routes>
      </div>
    </div>
  )
}

export default Component