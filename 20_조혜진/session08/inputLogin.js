import React, {useState} from "react";

function App(){
    const [id, setId] = useState("") 
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 

    const submitHandler = (event) => {
        event.preventDefault()
        setId("")
        setEmail("")
        setPassword("")
    }

    const changeId = (event) => {
        setId(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return(
        <div className="App">
            <form onSubmit={submitHandler}>
                <label className="id">ID </label>
                <input type="text" className="id" value={id} onChange={changeId}/><br></br>
                <label className="email">e-mail </label>
                <input type="email" value={email} onChange={changeEmail} disabled/><br></br>
                <label className="pw">P/W </label>
                <input type="password" value={password} onChange={changePassword}/>
                <button type="submit">Log-in</button>
            </form>
        </div>
    );
}

export default App;