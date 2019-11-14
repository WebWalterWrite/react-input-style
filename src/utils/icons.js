import { library, icon  } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock, faPhoneSquareAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser as user, faEnvelope as email } from '@fortawesome/free-regular-svg-icons';
library.add(
  email,
  faEnvelope,
  faLock,
  faPhoneSquareAlt,
  faPhoneAlt,
  faUser,
  user
);

const fullUser = icon({prefix: 'fas', iconName: 'user'})
const lightEmail = icon({prefix: 'far', iconName: 'envelope'})
const lightMobile = icon({prefix: 'fas', iconName: 'phone-alt'})
const lightUser = icon({prefix: 'far', iconName: 'user'})
const fullEmail = icon({prefix: 'fas', iconName: 'envelope'})
const password = icon({prefix: 'fas', iconName: 'lock'})
const fullMobile= icon({prefix: 'fas', iconName: 'phone-alt' })


export {
  fullUser,
  lightEmail,
  lightMobile,
  lightUser,
  fullEmail,
  fullMobile,
  password,
};