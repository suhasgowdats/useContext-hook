import logo from './logo.svg';
import './App.css';
import Component from './Component';
import {Provider} from './Contex'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




function App() {
  const [list, setlist]=useState([])
  const [editlist, seteditlist]=useState()
  const nav=useNavigate()

function updatelist(data){
  setlist([...list,data])
}
console.log(list)

function deleteHandel(id){
  const newlist=[...list];
  const position=list.findIndex(item=>item.id==id)
  newlist.splice(position,1)
  setlist(newlist)
}

function editedIndo(data){
  let position=list.findIndex(item=>item.id==data.id)
  let newArr=[...list]
  newArr[position]=data
  setlist(newArr)
  nav('/')
}


  return (
    <Provider value={{updatelist:updatelist, list:list, deleteHandel:deleteHandel,editedIndo:editedIndo}} >
       <Component/>
    </Provider >
  );
}

export default App;
