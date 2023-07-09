import React, { useState } from 'react';
import './signupPage.css'; // 스타일 파일 import

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('입력된 값:', { username, password, email });
  };

  return (
    <div id="wrap">
      <div id="mainSignUp">
        <div className="container">
          <div className="title">
            <h2>회원가입</h2>
            <span>
              필수 입력 정보입니다.
              <i>*</i>
            </span>
          </div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <div>
                    <label htmlFor="username">아이디</label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={handleUsernameChange}
                      placeholder="아이디를 입력해주세요"
                      required
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="password">비밀번호</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="비밀번호를 입력해주세요"
                      required
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label htmlFor="email">이메일</label>
                    <input
                      type="text"
                      id="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="예: marketKurly@kurly.com"
                      required
                    />
                  </div>
                </li>
              </ul>
              <div className="button-box">
                <button type="submit">가입하기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
