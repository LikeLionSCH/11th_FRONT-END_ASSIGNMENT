import React from 'react';
import styled, { keyframes } from 'styled-components';
import src from "./success.png"

const SuccessLogin = () => {
    return (
        <>
            <ImageContainer>
                <StyledTopText>
                    Sign In
                </StyledTopText>
                <Image src={src} alt="Image"></Image>
                <StyledBottomText>
                    SUCCESS!
                </StyledBottomText>
            </ImageContainer>
        </>

    );
};

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: rotate(0deg);
  }
  100% {
    opacity : 1;
    transform: rotate(360deg);
  }
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color : white;
  border-radius : 50%;
  color : black;
  text-align :center;
  animation: ${fadeInOut} 2.0s alternate;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledTopText = styled.div`
    text-align:center;
    margin : 0px;
    top: 20px;
    left : 185px;
    position: absolute;
    font-size : 50px;
    font-weight:bolder
`;

const StyledBottomText = styled.div`
    margin : 0px;
    top: 400px;
    left : 150px;
    position: absolute;
    font-size : 50px;
    font-weight:bolder
`;

export default SuccessLogin;