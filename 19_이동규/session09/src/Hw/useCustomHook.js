import { useState } from 'react';

const useCustomHook = (initialValue) => {
  const [username, setUsername] = useState(initialValue);
  const [password, setPassword] = useState(initialValue);
  const [email, setEmail] = useState(initialValue);

  const setId = (event) => {
    setUsername(event.target.value);
  }

  const setPw = (event) => {
    setPassword(event.target.value);
  }

  const setEm = (event) => {
    setEmail(event.target.value);
  }




  return [username, password, email, setId, setPw, setEm];
};

export default useCustomHook;