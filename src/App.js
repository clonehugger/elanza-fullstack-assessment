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
      Hello {data.name}, you called the backend {data.counter} times!
        <div>
            <Form />
            {/* START OF LISTED OPEN REQUESTS */}
                <OpenRequests />
            {/* END OF LISTED OPEN REQUESTS */}

        </div>
    </div>
  );
}

class Form extends React.Component {
    state = { companyName: 'Microsoft' };
    handleSubmit = async (event) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${this.state.companyName}`);
        this.props.onSubmit(resp.data);
        this.setState({ companyName: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <span className="formtext"></span>
                <input
                    type="text"
                    value={this.state.companyName}
                    onChange={event => this.setState({ companyName: event.target.value })}
                    placeholder="Enter Company Name"
                    required
                />
                <button>Go!</button>
            </form>
        );
    }
}

export default App;
