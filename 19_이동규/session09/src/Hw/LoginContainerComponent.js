import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import styled from "styled-components";
import "./LoginContainer.css";
import LoginImage from "./LoginImage";
import useCustomHook from "./useCustomHook";
import SuccessLogin from "./SuccessLogin";

// 콘텐츠 컨테이너 styled-components
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #122d58;
`;

// 로그인 컨테이너 styled-components
const LoginContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid;
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  height: 60%;
  width: 30%;

  @media (max-width: 767px) {
    /* 360x800 화면 비율에 맞추기 */
    width: 85%;
    height: 80%;
  }

  @media (min-width: 1920px) {
    /* 1920x1080 화면 비율에 맞추기 */
    width: 40%;
  }
`;

// 인풋 컨테이너 styled-components
const InputContainer = styled.div`
  width: 80%;
`;

// 버튼 컨테이너 styled-components
const ButtonContainer = styled.div`
  width: 80%;
`;

const LoginContainerComponent = () => {
  // 커스텀 훅 호출 및 비구조화(?)
  const [
    username,
    password,
    email,
    setId,
    setPw,
    setEm,
  ] = useCustomHook("");

  // 로그인 정보 출력 함수
  const printLoginInformation = () => {
    console.log(
      'id : ' + username + '\n' +
      'pw : ' + password + '\n' +
      'e-mail : ' + email);
    setSuccess(true); // 로그인 성공으로 변경    
  };

  // 로그인 성공 여부 state
  const [success, setSuccess] = useState(false);

  return (
    <>
      {/* 전체 콘텐츠 컨테이너 */}
      <ContentsContainer className="justify-content-center">
        {/* 로그인 컨테이너 */}
        {!success && <LoginContainer onSubmit={printLoginInformation}>
          {/* 로그인 상단 이미지 */}
          <LoginImage></LoginImage>
          {/* 아이디 & 비밀번호 & 이메일 인풋 */}
          <InputContainer>
            <InputComponent
              value={username}
              onChange={setId}
              label="ID"
              type="text"
              placeholder="ex) LikeLion11"
            />
            <InputComponent
              value={password}
              onChange={setPw}
              label="password"
              type="password"
              placeholder="ex) Growl1234!!"
            />
            <InputComponent
              value={email}
              onChange={setEm}
              label="e-mail"
              type="text"
              placeholder="ex) WaitPark@gmail.com"
            />
          </InputContainer>
          {/* 로그인 버튼 */}
          <ButtonContainer>
            <ButtonComponent value="Sign in" />
          </ButtonContainer>
        </LoginContainer>}
        {success && <SuccessLogin />}
      </ContentsContainer>
    </>
  );
};

export default LoginContainerComponent;
