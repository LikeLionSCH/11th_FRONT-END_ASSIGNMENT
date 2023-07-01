import React,{useState} from "react";
import styled from "styled-components";



function Project1() {
  const [emailValue, setEmail]=useState('')
  const [pwValue, setPw]=useState()
  const [textValue, setText]=useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log(emailValue)
    console.log(pwValue)
    console.log(textValue)
    setEmail('');
    setPw("");
    setText("");
    }
    const saveText = event => {
        setText(event.target.value);
        // console.log(event.target.value);
      };
  const saveEmail = event => {
    setEmail(event.target.value);
    // console.log(event.target.value);
  };
  const savePw = event => {
    setPw(event.target.value);
    // console.log(event.target.value);
  };

  const StyledButton = styled.button`
    background-color: green;
    color: white;
    font-size: 50px;
`;
    function Button() {
    return (
    <StyledButton>Button</StyledButton>
    )
    }
  return (
    <div className="Project1">
    <form onSubmit={submitHandler}>
    <p><label>Text</label></p>
    <input type="text" name="text" value={textValue} onChange={saveText} disabled></input>    
    <p><label>Email</label></p>
    <input type="email" name="email" value={emailValue} onChange={saveEmail}></input>
    <p><label>Password</label></p>
    <input type="password" name="password" value={pwValue} onChange={savePw}></input>
    <br></br>
    <br></br>
    <Button type='submit'>button</Button>
    <h1>{textValue}</h1>
    <br></br>
    <h1>{emailValue}</h1>
    <br></br>
    <h1>{pwValue}</h1>
    </form>
    </div>
    );
}

export default Project1;
