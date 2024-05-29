import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import CreateGroup from './components/CreateGroup';
import { Routes,Route } from 'react-router-dom';
import DashBoard from './components/Dashboard';


function App(props) {

 
  return (
    <>
      <CustomNavbar/>
      <Routes>
      {/* <Route path="/" element= /> */}
      <Route path="/createGroup" element = {<CreateGroup/>} />
      <Route path="/dashboard" element= {<DashBoard/>} />
      </Routes>
      {/* <CreateGroup/> */}
    </>
  )
}

export default App
