import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Form from './Form'

function App() {
  const [teamMember, setTeamMember] = useState({
    fname: '',
    lname: '',
    role: ''

  })
  return (
    <div className="App">
     <Form />
    </div>
  );
}

export default App;
