import React from 'react';
import { createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"


let rootId=document.getElementById('root');
let root=createRoot(rootId);
root.render(
  <BrowserRouter>
   <App/>
   </BrowserRouter>
)


