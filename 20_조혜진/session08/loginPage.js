import React, { useState } from "react";
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

const Input = styled.input`
  width: 200px;
  padding: 10px;
  margin-bottom: 10px;
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

function App() {
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
                <label>ID</label>
                <Input type="text" value={id} onChange={changeId} />
                <label>e-mail</label>
                <Input type="email" value={email} onChange={changeEmail} disabled />
                <label>Password</label>
                <Input type="password" value={password} onChange={changePassword} />
                <StyledButton type="submit">Log-in</StyledButton>
            </Form>
        </Div>
    );
}
    
export default App;
