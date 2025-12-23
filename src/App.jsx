import { useState,useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Register from './Components/Register'
import './css/App.css'
import UseActionRegister from './Components/UseActionRegister'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
//  useEffect(()=>{
//   axios.get('http://localhost:50706/api/Employee')
//   .then(response => {
//     console.log(response.data); // The data from the API
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });
//   },[])
  return (
    <>
       <nav className='navbar'>
             <div className='nav-links'>
              <Link to="/Register">Register</Link>
                <Link to="/NewRegister">New Register</Link>
             </div>
       </nav>
      

        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/NewRegister" element={<UseActionRegister/>}/>
          
        </Routes>

        
    </>
  )
}

export default App
