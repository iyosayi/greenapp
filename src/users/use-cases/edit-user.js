import makeUser from "../entities";

export default function makeEditUser({ usersDb }) {
  return async function editUser({ _id, ...changes } = {}) {
    if (!_id) {
      throw new Error("You must supply an id.");
    }
    if (!changes) {
      throw new Error("You must enter valid details.");
    }
    const existing = await usersDb.findById({ _id });
    if (!existing) {
      throw new Error("User not found.");
    }

    const user = makeUser({ ...existing, ...changes });
    if (user.getHash() === existing.getHash()) {
      console.log(user);
      return user;
    }

    return Object.freeze({
      id: user.getId(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      email: user.getEmail(),
      hash: user.getHash(),
      phoneNumber: user.getPhoneNum(),
      role: user.getRole(),
      username: user.getUsername(),
      password: user.getPassword(),
      modifiedOn: user.getModifiedOn(),
    });
  };
}
