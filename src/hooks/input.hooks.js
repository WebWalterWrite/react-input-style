import { useState } from 'react';


const typeList = {
  CHECKBOX: 'checkbox',
  EMAIL: "email",
  FILE: 'file',
  FIRSTNAME: 'text',
  PASSWORD: 'password',
  PHONE: 'tel',
  RADIO: 'radio',
  TEL: "tel",
  TEXT: "text",
  URL: 'url'
};

const setInputType = value => {
  const type = value.toUpperCase();
  const inputType = Object.keys(typeList).find(t => t === type);
  return typeList[inputType];
};


const useInput = (initialState, type,...rest ) => {
  
  const [noplaceholder] = rest.map(el => el);

  const [value, setValue] = useState(initialState);
  return{
    type: setInputType(type),
    placeholder: noplaceholder ? null : type,
    name: type,
    id: type,
    value: value ,
    onChange: e => setValue(e.target.value),
  }
};

export default useInput;