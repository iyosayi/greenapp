import makeUser from "../entities";

export default function makeAddUser({ usersDb }) {
  return async function addUser(userInfo) {
    const user = makeUser(userInfo);
    const exists = await usersDb.findByHash({ hash: user.getHash() });
    if (exists) {
      return exists;
    }

    return usersDb.insert({
      id: user.getId(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      username: user.getUsername(),
      phoneNumber: user.getPhoneNum(),
      email: user.getEmail(),
      role: user.getRole(),
      createdAt: user.getCreatedAt(),
      hash: user.getHash(),
      password: user.getPassword(),
    });
  };
}
