import { fullUser, lightUser, fullEmail, lightEmail, fullMobile, lightMobile, password } from "./icons";

const iconsList = {
  firstname: { full: fullUser, light: lightUser },
  lastname: { full: fullUser, light: lightUser },
  email: { full: fullEmail, light: lightEmail },
  phone: {full: fullMobile, light: lightMobile},
  password: { full: password, light: lightUser }
};

const getIconByInputName = (inputName, type) => {
  const icon = Object.keys(iconsList).find(key => key === inputName);
  return type === "light" ? iconsList[icon].light : iconsList[icon].full;
};

export default getIconByInputName;
