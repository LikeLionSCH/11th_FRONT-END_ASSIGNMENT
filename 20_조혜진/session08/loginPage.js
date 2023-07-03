import React, { useState } from "react";
import Input from "./components/input";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background: orange;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
`;

function LoginPage() {
    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        setId("");
        setEmail("");
        setPassword("");
    };

    const changeId = (event) => {
        setId(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <Div>
            <Form onSubmit={submitHandler}>
                <h1>혜진 로그인</h1>
                <label className="id">ID </label>
                <Input type="text" className="id" value={id} onChange={changeId}/><br></br>
                <label className="email">e-mail </label>
                <Input type="email" value={email} onChange={changeEmail} disabled/><br></br>
                <label className="pw">P/W </label>
                <Input type="password" value={password} onChange={changePassword}/>
                <StyledButton type="submit">Log-in</StyledButton>
            </Form>
        </Div>
    );
}
    
export default LoginPage;
