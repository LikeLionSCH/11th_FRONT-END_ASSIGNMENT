import React, { useState } from "react";
import Input from "./components/inputs/Input";
import styled from "styled-components";

function Login() {
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

    const StyledDiv = styled.div`
        display: flex;
        justify-content: center;
    `;

    const StyledForm = styled.form`
        display: flex;
        flex-direction: column;
        padding: 10px 20px;
        border: 1px solid #ccc;
    `;

    const StyledButton = styled.button`
        background-color: gray;
        color: white;
        padding: 10px 15px;
        border: 1px solid #ccc;
    `;

    return (
        <StyledDiv>
            <StyledForm onSubmit={submitHandler}>
                <h1>Login</h1>
                <label className="id">ID</label>
                <Input
                    type="text"
                    value={id}
                    onChange={changeId}
                    disabled />


                <label className="email">Email</label>
                <Input
                    type="email"
                    value={email}
                    onChange={changeEmail} />


                <label className="pw">Password</label>
                <Input
                    type="password"
                    value={password}
                    onChange={changePassword} />

                <br></br>
                <StyledButton type="submit">button</StyledButton>
            </StyledForm>
        </StyledDiv>
    );
}

export default Login;