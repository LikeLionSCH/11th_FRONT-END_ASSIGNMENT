import React from "react";

const Input = ({ label, type, value, onChange, disabled }) => {
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

// import Input from '../inputs/Input';
// <Input
//     id="email"
//     label="Email"
//     disabled={isLoading}
//     register={register}
//     errors={errors}
//     required
// />