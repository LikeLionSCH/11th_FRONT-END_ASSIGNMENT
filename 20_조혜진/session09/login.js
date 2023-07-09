import React from "react";
import Input from "./components/input";
import useInput from "./useInput";
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
    const [username, setUsername, resetUsername] = useInput("");
    const [email, setEmail, resetEmail] = useInput("");
    const [password, setPassword, resetPassword] = useInput("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        resetUsername();
        resetEmail();
        resetPassword();
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <h1>혜진 로그인</h1>
        <label className="username">username </label>
        <Input type="text" className="username" value={username} onChange={setUsername} /><br />
        <label className="email">e-mail </label>
        <Input type="email" value={email} onChange={setEmail} /><br />
        <label className="pw">P/W </label>
        <Input type="password" value={password} onChange={setPassword} />
        <StyledButton type="submit">Log-in</StyledButton>
      </Form>
    </Div>
  );
}

export default LoginPage;
