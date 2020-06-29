export default function makeListUsers({ usersDb }) {
  return async function listUsers({ _id, max, before, after } = {}) {
    if (!_id) {
      throw new Error("You must supply a valid id.");
    }
    const users = await usersDb.findAll({ max, before, after });
    return users;
  };
}
