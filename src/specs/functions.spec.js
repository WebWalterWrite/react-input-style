const typeList = {
  CHECKBOX: "checkbox",
  EMAIL: "email",
  FILE: "file",
  FIRSTNAME: "text",
  PASSWORD: "password",
  PHONE: "tel",
  RADIO: "radio",
  TEL: "tel",
  TEXT: "text",
  URL: "url"
};

const setInputType = value => {

  const type = value.toUpperCase();
  const inputType = Object.keys(typeList).find(t => t === type);
  return typeList[inputType];
};


describe(' tester fonction', () => {

 test('retourne le type de input', () =>{

  expect(setInputType('firstname')).toBe('text')

 })

})