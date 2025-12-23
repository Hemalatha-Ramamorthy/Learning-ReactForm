import { useState,useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import UseActionRegister from './Components/UseActionRegister';
import './css/App.css';
import axios from 'axios';

function Home() {
  const [employees, setEmployees] = useState([]); // <-- declare state

  useEffect(() => {
    axios.get("http://localhost:50706/api/Employee")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {employees.length === 0 ? (
        <p>Loading employees...</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={index}>{emp.name}</li> // assuming employee object has 'name'
          ))}
        </ul>
      )}
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className='navbar'>
        <div className='nav-links'>
          <Link to="/Register">Register</Link>
          <Link to="/NewRegister">New Register</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/NewRegister" element={<UseActionRegister />} />
      </Routes>
    </>
  );
}

export default App;
