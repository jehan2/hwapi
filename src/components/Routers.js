import React from 'react'
import Nav from './Nav'
import Store from './Store'
import {  Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
function Routers() {
  return (
    <div>
        <Nav/>
        <Routes>
        <Route path="/Store" element={<Store/>}></Route> 
        <Route path="/Login" element={<Login/>}></Route> 
        <Route path="/Home" element={<Home/>}></Route> 
        </Routes>


    </div>
  )
}

export default Routers