import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import styled from 'styled-components'

const FormDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

function Form() {
  return (
    
        <form>
          <FormDiv>
            <label htmlFrom='fname'>First Name</label>
                <input 
                type='text'
                placeholder='First Name'
                id='fname'
                name='fname'>
                </input>
             
            <label htmlFrom='lname'>Last Name</label>
                <input
                type='text'
                placeholder='Last Name'
                id='lname'
                name='lname'>
                </input>

            <label htmlFrom='role'>Job Role</label>
                <input list='work-role'
                placeholder='Role'
                id='role'
                name='role'>
                </input>
              
                <datalist id="work-role">
                    <option value="Back End Engineer"/>
                    <option value="Front End Enginner"/>
                    <option value="UI/UX Developer"/>
                    <option value="Data Scientist"/>
                    <option value="IOS Developer"/>
                </datalist>
          </FormDiv>

        </form>
     
  );
}

export default Form;
