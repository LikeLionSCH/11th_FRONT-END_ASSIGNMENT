import React from 'react';
import src from './sample.jpg'
import { styled } from 'styled-components';


const LoginImage = () => {
    return (
        <>
            <StyledImageContainer>
                <StyledImage src={src} alt='image123'
                ></StyledImage>
            </StyledImageContainer>
        </>
    );
};

const StyledImageContainer = styled.div`
    top: -100px;
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
    width: 150px;
    height: 150px; 
    border-radius: 70%;
    overflow: hidden;
    z-index: 2;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    color: aliceblue;
    margin-bottom: 5%;
`;

export default LoginImage;