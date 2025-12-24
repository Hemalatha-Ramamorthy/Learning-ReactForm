import { useState,useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import UseActionRegister from './Components/UseActionRegister';
import './css/App.css';
import Home from './Home'
import Country from './Components/Country';
import ListTask from './Components/ListTask';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-links'>
          <Link to="/Register">Register</Link>
          <Link to="/NewRegister">New Register</Link>
          <Link to="/ListTask">ListTask</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/NewRegister" element={<UseActionRegister />} />
         <Route path="/Country" element={<Country />} />
         <Route path="/ListTask" element={<ListTask />} />
      </Routes>
    </>
  );
}

export default App;
