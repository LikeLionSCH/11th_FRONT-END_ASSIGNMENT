import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Component } from 'react';


function App() {

  let [text, setText] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

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

  return (
      <div className='input'>
          <h1>멋사</h1>

          <form className='text'>
            <label htmlFor="text">Text </label>
            <input id='text' type="text" value={text} onChange={onChangeText} placeholder="--- no use ---" disabled/>
          </form>
          
          <form className='Email'>
            <label htmlFor="Email">Email </label>
            <input id='Email' type="email" value={email} onChange={onChangeEmail}/>
          </form>

          <form className='pw'>
            <label htmlFor="Email">Pw </label>
            <input id='Email' type="password" value={password} onChange={onChangePw}/>
          </form>
          <button className="B" onClick={submitHandler}>login</button>


      </div>
  )
}


export default App;
