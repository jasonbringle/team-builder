import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import TeamMembers from "./Teammember";

function App() {
  const [teamMember, setTeamMember] = useState([
    
  ]);

  const addNewMem = mem => {
    const newMem = {
      fname: mem.fname,
      lname: mem.lname,
      role: mem.role
    };
    setTeamMember([...teamMember, newMem]);
  };

  return (
    <div className="App">
      <Form addNewMem={addNewMem} />
      <TeamMembers teamMember={teamMember} />
    </div>
  );
}

export default App;
