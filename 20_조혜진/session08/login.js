import React, { useState } from "react";
import Input from "./components/input";

const Login = () => {
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
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <Input
                label="ID"
                type="text"
                value={id}
                onChange={changeId}
                />
                <Input
                label="Email"
                type="email"
                value={email}
                onChange={changeEmail}
                disabled
                />
                <Input
                label="Password"
                type="password"
                value={password}
                onChange={changePassword}
                />
                <button type="submit">Log-in</button>
            </form>
        </div>
    );
};

export default Login;
