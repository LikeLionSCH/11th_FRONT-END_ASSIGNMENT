import React, { useState, useEffect } from "react";
import Input from "../session08/components/inputs/Input";
import useInput from "./useInput";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const MyH1 = styled.h1`
  color: green;
  text-align: center;
  font-size: 40px;
  padding: 0px;
`;

const MyLabel = styled.label`
  margin-right: 20px;
  margin-top: 10px;
  height: auto;
  margin-left: 35px;
`;

const InputDiv = styled.div`
  width: 200px;
  margin-left: 35px;
`;

const StyledForm = styled.form`
    display: flex;
    width: flex;
    flex-direction: column;
    padding: 10px 20px;
    border: 1px solid #ccc;
    font-size: 20px;
    margin-top: 200px;
`;

const StyledButton = styled.button`
    background-color: gray;
    color: white;
    padding: 10px 15px;
    border: 1px solid #ccc;

`;

function Login() {

    const [username, onChangeUsername, resetusername] = useInput("");
    const [password, onChangePw, resetpassword] = useInput("");
    const [email, onChangeEmail, resetemail] = useInput("");

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("아이디:", username);
        console.log("비밀번호:", password);
        console.log("이메일:", email);
        console.log("======================");
        resetemail();
        resetpassword();
        resetusername();
    }

    return (
        <StyledDiv>
            <StyledForm onSubmit={submitHandler}>
                <MyH1>Login</MyH1>
                <MyLabel className="id">ID</MyLabel>
                <InputDiv>
                    <Input
                        type="text"
                        className="username"
                        value={username}
                        onChange={onChangeUsername}
                    />
                </InputDiv>


                <MyLabel className="email">Email</MyLabel>
                <InputDiv>
                    <Input
                        type="email"
                        className="userEmail"
                        value={email}
                        onChange={onChangeEmail} />
                </InputDiv>


                <MyLabel className="pw">Password</MyLabel>
                <InputDiv>
                    <Input
                        type="password"
                        className="userPw"
                        value={password}
                        onChange={onChangePw} />
                </InputDiv>

                <br></br>
                <StyledButton type="submit">button</StyledButton>
            </StyledForm>
        </StyledDiv>
    );
}

export default Login;