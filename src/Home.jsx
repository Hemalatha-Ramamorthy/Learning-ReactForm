import { useState, useEffect } from "react";
import axios from 'axios';
import Loader from "./Components/Loader";

function Home() {
  const [employees, setEmployees] = useState([]); // <-- declare state

  useEffect(() => {
    axios.get("http://localhost:50706/api/Employee")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);
  
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      {employees.length === 0 ? (
        <Loader/>
      ) : (
        <ul>
          {employees?.map((emp) => (
            <li key={emp?.id}>{emp?.name}</li> 
          ))}
        </ul>
      )}
    </>
  );
}

export default Home;