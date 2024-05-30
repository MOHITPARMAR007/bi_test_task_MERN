import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import CreateGroup from './components/CreateGroup';
import { Routes, Route } from 'react-router-dom';
import DashBoard from './components/Dashboard';
import Home from './components/Home'; // Ensure this import is correct
import About from './components/About';

function App() {
  return (
    <>
      <CustomNavbar/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Wrap Home in JSX */}
        <Route path="/createGroup" element={<CreateGroup />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
}

export default App;
