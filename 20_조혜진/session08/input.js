import React from "react";

const Input = ({ label, type, disabled, value, onChange }) => {
  return (
    <div>
        <label>{label}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
        />
    </div>
  );
};

export default Input;
