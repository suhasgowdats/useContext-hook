import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {user} from './Contex'

function View() {
  const {list}=useContext(user)
  const {id}=useParams()
  const nav=useNavigate()

    let filterlist=list.filter(item=>item.id==id)
  

  return (
    <div>
      <h1>Name:{filterlist[0].name}</h1>
      <h1>Profession:{filterlist[0].profession}</h1>
      <button  className='btn-header' onClick={()=>nav('/')}>Back</button>
    </div>
  )
}

export default View