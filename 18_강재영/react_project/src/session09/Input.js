import React from "react";

const Input =({type, name, value, onChange})=>{
    return (
        <div>
            <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            ></input>
        </div>
      );
};

export default Input;