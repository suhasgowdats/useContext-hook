import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {user} from './Contex'
import './Tabel.css'

function Tabel() {
  const {list, deleteHandel}=useContext(user)
  
  function DeleteItem(id){
    deleteHandel(id)
  }
  console.log(list)



  return (
    <div className='tabel'>
       {
        list==""?<h1>No data to display</h1>:
        (<table>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Profession</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((item,i)=>{
                return(
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.profession}</td>
                    <td>
                      <NavLink to={`/view/${item.id}`}><button className='btn-act'>View</button></NavLink>
                      <NavLink to={`/edit/${item.id}`}><button className='btn-act'>Edit</button></NavLink>
                      <button className='btn-act' onClick={()=>DeleteItem(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>)
       }
    </div>
  )
}

export default Tabel