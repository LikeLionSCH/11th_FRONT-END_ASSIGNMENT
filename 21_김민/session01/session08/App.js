import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import React, { useState } from 'react';


function InputSample() {  

  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let submitHandler = (e) => {
    e.preventDefault()
    setText("")
    setEmail("")
    setPassword("")
  }
  let onChangeText = (e) => {
    setText(e.target.value);
  }
  let onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  let onChangePw = (e) => {
    setPassword(e.target.value);
  }


  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText('');
  };

  return (
    <div>
    
    <form>
            <p>
              <label htmlFor="text">id </label>
              <input id='text' 
              type="text" 
              value={text} 
              onChange={onChangeText} 
              placeholder="--- no use ---" 
              disabled/>
            </p>
            
            <p>
              <label htmlFor="Email">Email </label>
              <input id='Email' 
              type="email" 
              value={email} 
              onChange={onChangeEmail}/>
            </p>

            <p>
              <label htmlFor="password">Pw </label>
              <input id='password' 
              type="password" 
              value={password} 
              onChange={onChangePw}/>
            </p>
          </form>

          <button className="B" onClick={submitHandler}>login</button>

    </div>
  )
}


function App() {
  


  return (
    <div className="App">
      <h1>멋사</h1>
      <InputSample />
    </div>
  );
}

export default App;
