import React, { useState, useEffect }  from 'react';
import logo from './logo.png';
import './App.css';
import axios from 'axios';
import { OpenRequests } from "./OpenRequests";

function App() {
  const [data, setData] = useState({ name: 'Caregiver', counter: 0 });


  const fetchData = async () => {
    const response = await fetch('/api/data');
    const result = await response.json();
    setData(result);
  };

  useEffect (() => {
    fetchData();
  }, []);

  return (
    <div className="main">
      <img src={logo} alt="" width="100" /><br />
      <br></br>
        <div>
            {/* START OF LISTED OPEN REQUESTS */}
                <OpenRequests />
            {/* END OF LISTED OPEN REQUESTS */}

        </div>
    </div>
  );
}

export default App;
