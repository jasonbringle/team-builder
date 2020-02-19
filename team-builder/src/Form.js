import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
`;

function Form(props) {
  console.log("form props", props);
  const [member, setMember] = useState({
    fname: "",
    lname: "",
    role: ""
  });

  function handleChanges(event) {
    console.log("event", event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  console.log(member);

  const submitForm = event => {
    event.preventDefault();
    props.addNewMem(member);
    setMember({
      fname: "",
      lname: "",
      role: ""
    });
  };
  return (
    <form onSubmit={submitForm}>
      <FormDiv>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          id="fname"
          name="fname"
          onChange={handleChanges}
          value={member.fname}
        ></input>

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          id="lname"
          name="lname"
          onChange={handleChanges}
          value={member.lname}
        ></input>

        <label htmlFor="role">Job Role</label>
        <input
          list="work-role"
          placeholder="Role"
          id="role"
          name="role"
          onChange={handleChanges}
          value={member.role}
        ></input>

        <datalist id="work-role">
          <option value="Back End Engineer" />
          <option value="Front End Engineer" />
          <option value="UI/UX Developer" />
          <option value="Data Scientist" />
          <option value="IOS Developer" />
        </datalist>
        <button type="submit">Add Member!</button>
      </FormDiv>
    </form>
  );
}

export default Form;
