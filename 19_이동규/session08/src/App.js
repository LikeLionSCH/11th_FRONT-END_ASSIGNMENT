import './App.css';
import Input from "./Input"; // Hw01
import styled from 'styled-components';



const App = () => {
  return (
    <>
      {/* Hw01 */}
      {/* <Input label="이름" type="text" />
      <Input label="이메일" type="email" disabled={true} />
      <Input label="비밀번호" type="password" /> */}

      {/* Hw02 */}
      <LoginContainer>
      <Input label="아이디" type="text" ></Input>
      <Input label="비밀번호" type="password" ></Input>
      </LoginContainer>
    </>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color : rgb(37, 83, 156);
`;



export default App;
