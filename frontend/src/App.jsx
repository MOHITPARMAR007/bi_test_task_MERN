import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import CreateGroup from './components/CreateGroup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomNavbar/>
      <CreateGroup/>
    </>
  )
}

export default App
