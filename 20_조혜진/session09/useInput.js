import React, {useState} from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    const reset = () => {
      setValue(initialValue);
    };
    return [value, handleChange, reset];
  };

  export default useInput;