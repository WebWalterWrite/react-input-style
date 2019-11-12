import { fullUser, lightUser, email } from './icons';


const iconsList = {
  fullUser: fullUser,
  lightUser: lightUser,
  email: email,
}

const getIconByInputName = (inputName, type) => {

  switch(inputName){
    case 'firstname' :
    case 'lastname' :
      return type === 'light' ? iconsList.lightUser : iconsList.fullUser ;
    case 'email':
      return iconsList.email;
    default: return
  }
};


export default getIconByInputName;
