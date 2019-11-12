import { library, icon  } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser as user } from '@fortawesome/free-regular-svg-icons';
library.add(
  faEnvelope,
  faUser,
  user
);

const fullUser = icon({prefix: 'fas', iconName: 'user'})
const lightUser = icon({prefix: 'far', iconName: 'user'})
const email = icon({prefix: 'fas', iconName: 'envelope'})
export {
  fullUser,
  lightUser,
  email
};