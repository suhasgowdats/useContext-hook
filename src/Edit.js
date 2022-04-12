import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { user } from './Contex'

function Edit() {
  const { list,editedIndo } = useContext(user)
  const [editlist, seteditlist]=useState({
    name:'',
    profession:''
  })
  const {id}=useParams()
  console.log(id)
  
  useEffect(()=>{
    const filterData=list.filter(item=>item.id==id)
    seteditlist({...editlist,name:filterData[0].name,profession:filterData[0].profession,id:id})
  },[])


function editChange(e){
   seteditlist({...editlist,[e.target.name]:e.target.value})
}


function editSubmit(e){
    e.preventDefault()
    const editedData={
      id:id,
      name:editlist.name,
      profession:editlist.profession
    }
  
    editedIndo(editedData)
}

  return (
    <div>
      <form onSubmit={editSubmit}>
        <label className='label'>Name:</label>
        <input className='input' type='text' placeholder='Enter name' name='name' value={editlist.name} required='required'
          onChange={editChange} /><br></br>
        <label className='label'>Professsion:</label>
        <input className='input' type='text' placeholder='Enter profession' name='profession' value={editlist.profession}  required="required" onChange={editChange} /><br></br>
        <button className='btn-submit'>Submit</button>
      </form>
    </div>
  )
}

export default Edit