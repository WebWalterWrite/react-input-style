import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faEnvelope,
  faLock,
  faPhoneSquareAlt,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser as user,
  faEnvelope as email
} from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(
  email,
  faEnvelope,
  faGithub,
  faLock,
  faPhoneSquareAlt,
  faPhoneAlt,
  faUser,
  user
);

const fullUser = icon({ prefix: "fas", iconName: "user" });
const lightEmail = icon({ prefix: "far", iconName: "envelope" });
const lightMobile = icon({ prefix: "fas", iconName: "phone-alt" });
const lightUser = icon({ prefix: "far", iconName: "user" });
const fullEmail = icon({ prefix: "fas", iconName: "envelope" });
const fullMobile = icon({ prefix: "fas", iconName: "phone-alt" });
const github = icon({ prefix: "fab", iconName: "github" });
const password = icon({ prefix: "fas", iconName: "lock" });

export {
  fullUser,
  lightEmail,
  lightMobile,
  lightUser,
  fullEmail,
  fullMobile,
  github,
  password
};
