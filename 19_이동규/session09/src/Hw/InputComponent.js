import React from 'react';
import styled from 'styled-components';



const InputComponent = ({onChange ,label, disabled, type, placeholder }) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput onChange={onChange} type={type} disabled={disabled} placeholder={placeholder} />
    </>
  );
};

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledLabel = styled.label`
    color:antiquewhite;
`;


export default InputComponent;
