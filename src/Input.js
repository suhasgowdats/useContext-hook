import React, { useContext, useState } from 'react'
import {nanoid} from 'nanoid'
import {user} from './Contex'
import { useNavigate } from 'react-router-dom'
import './Input.css'

function Input() {
  const [contact, setcontact] = useState({
    name:"",
    profession:""
  })
  const {updatelist}=useContext(user)
  const nav=useNavigate()


  function inpuChange(e){
      setcontact({...contact,[e.target.name]:e.target.value})
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    const newContact={
      id:nanoid(),
      name:contact.name,
      profession:contact.profession
    }
    setcontact({
      name:'',
      profession:""
    })
    updatelist(newContact) 
    nav(-1)  
  }
  

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label className='label'>Name:</label>
        <input className='input' type='text' placeholder='Enter name' name='name' value={contact.name} required='required'
          onChange={inpuChange} /><br></br>
          <label className='label'>Professsion:</label>
        <input className='input' type='text' placeholder='Enter profession' name='profession' value={contact.profession}  required="required" onChange={inpuChange} /><br></br>
      <button className='btn-submit'>Submit</button>
      </form>
    </div> 
  )
}

export default Input