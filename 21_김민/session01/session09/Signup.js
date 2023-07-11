import React, { useState, useRef, useEffect } from 'react';
// import useCounter from './custom_hook/useCounter';



function Signup() {

    const [inputs, setInputs] = useState({
        text : '',
        Email : '',
        pw : '',
    });

    const { text, Email, pw } = inputs; // 비구조화 할당

    const onChange = (e) => {
        const { value, name } = e.target; 
        setInputs({
            ...inputs, // 기존의 input 객체 복사
            [name]: value,
        });
    };

    const onReset = () => {
        console.log('Username:', text);
        console.log('Email:', Email);
        console.log('Password:', pw);

        setInputs({
            text : '',
            Email : '',
            pw : '',
        })
    };

    return(
    <div>
        <h1>멋 사</h1>
        <form>
            <p>  
              <label htmlFor="text">id  </label>
              <input name='text' 
              type="text" 
              value={text} 
              onChange={onChange} 
              />
            </p>
            
            <p>
              <label htmlFor="Email">email</label>
              <input name='Email' 
              type="email" 
              value={Email} 
              onChange={onChange}
              />
            </p>

            <p>
              <label htmlFor="password">Pw </label>
              <input name='pw' 
              type="password" 
              value={pw} 
              onChange={onChange}/>
            </p>
          </form>

          <button className="B" onClick={onReset}>login</button>
    </div>
  )
}

export default Signup;