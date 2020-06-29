import makeUser from "../entities";
export default function makeRemoveUser({ usersDb }) {
  return async function removeUser({ _id } = {}) {
    if (!_id) {
      throw new Error("You must supply a valid id.");
    }
    const userToDelete = await usersDb.findById({ _id });
    if (!userToDelete) {
      return deleteNothing();
    }
    return hardDelete(userToDelete);

    function deleteNothing() {
      return {
        deletedCount: 0,
        message: "User not found, nothing to delete",
      };
    }

    async function hardDelete(user) {
      await usersDb.remove(user);
      return {
        deletedCount: 1,
        message: "User deleted.",
      };
    }
  };
}
