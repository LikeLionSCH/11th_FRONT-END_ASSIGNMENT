import React from 'react';
import styled from 'styled-components';



const Input = ({ label, disabled, type }) => {
  return (
    <div>
      <StyledLabel>{label}:</StyledLabel>
      <StyledInput type={type} disabled={disabled} />
    </div>
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
    color:white;
`;

export default Input;
