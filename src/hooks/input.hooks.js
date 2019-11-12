import { useState } from 'react';


const useInput = (initialState, type, placeholder, name, ...rest ) => {

  const [value, setValue] = useState(initialState);
  
  return{
    type,
    placeholder,
    name,
    id: name,
    value: value ,
    onChange: e => setValue(e.target.value),
  }
};

export default useInput;