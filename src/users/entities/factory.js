import {
  RequiredParameterError,
  InvalidParameterError,
} from "../../helpers/errors";
import {
  isValidEmail,
  isValidPassword,
  isValidNumber,
  upperFirst,
} from "../../helpers/validator";
import { hashPassword } from "../../helpers/password";

export default function buildMakeUser({ md5, Id }) {
  return function makeUser({
    firstName,
    lastName,
    id = Id.makeId(),
    username,
    phoneNumber,
    email,
    role,
    password,
    createdAt = Date.now(),
    modifiedOn = Date.now(),
  } = {}) {
    if (!Id.isValidId(id)) {
      throw new InvalidParameterError("User must have a valid Id.");
    }
    if (!firstName || !lastName) {
      throw new RequiredParameterError("Please input both names.");
    }
    if (!username) {
      throw new RequiredParameterError("Please enter a valid Username.");
    }
    if (!isValidNumber(phoneNumber)) {
      throw new InvalidParameterError("Please enter a valid Phone number.");
    }
    if (!isValidEmail(email)) {
      throw new InvalidParameterError("Please enter a valid email");
    }
    if (!role) {
      throw new RequiredParameterError("Please enter a role.");
    }
    if (!isValidPassword(password)) {
      throw new InvalidParameterError("Please enter a valid Password.");
    }
    let hash;

    return Object.freeze({
      getId: () => id,
      getFirstName: () => upperFirst(firstName),
      getLastName: () => upperFirst(lastName),
      getUsername: () => upperFirst(username),
      getPhoneNum: () => phoneNumber,
      getEmail: () => email.toLowerCase(),
      getRole: () => role.toLowerCase(),
      getCreatedAt: () => createdAt,
      getHash: () => hash || (hash = makeHash()),
      getPassword: () => password,
      getModifiedOn: () => modifiedOn,
    });

    function makeHash() {
      return md5((firstName || "") + (lastName || "") + createdAt);
    }
  };
}
