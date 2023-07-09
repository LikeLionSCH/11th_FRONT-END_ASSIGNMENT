import React from "react";
import styled from "styled-components";

// 버튼 styled-components
const Container = styled.button`
  height: 100%;
  display: grid;
  font-family: Avenir, sans-serif;
  color: #111;
  border-radius: 50px;
  background: rgba(255, 171, 157, 0.5);
  border: 0px;
`;

// 버튼 내 텍스트(링크) styled-components
const Link = styled.a`
  text-decoration: none;
  color: whitesmoke;
`;

// 버튼 내부 styled-components
const CTA = styled(Link)`
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;

  /* 이벤트 발생 전 */
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    display: block;
    border-radius: 28px;
    background: rgba(255, 171, 157, 0.5);
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  
  /* 버튼 내 텍스트(링크) styled-components */
  span {
    position: relative;
    font-size: 16px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    vertical-align: middle;
  }
  /* 화살표 svg */
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: white;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  /* 버튼 호버 이벤트 발생 시 */
  &:hover {
    &:before {
      width: 100%;
      background: rgba(255, 171, 157, 1);
    }

    svg {
      transform: translateX(0);
    }
  }

  /* 버튼 클릭 이벤트 발생 시 */
  &:active {
    transform: scale(0.96);
  }
`;

const CenteredButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ButtonComponent = ({ value, onSubmit }) => {
  return (
    <CenteredButtonContainer>
      <Container onClick={onSubmit}>
        <CTA href="#">
          <span>{value}</span>
          {/* 화살표 svg */}
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </CTA>
      </Container>
    </CenteredButtonContainer>
  );
};

export default ButtonComponent;
