import makeAddUser from "./add-user";
import makeRemoveUser from "./remove-user";
import makeEditUser from "./edit-user";
import makeListUsers from "./list-users";
import usersDb from "../model/index";

const addUser = makeAddUser({ usersDb });
const listUsers = makeListUsers({ usersDb });
const editUser = makeEditUser({ usersDb });
const removeUser = makeRemoveUser({ usersDb });

const userService = Object.freeze({ addUser, removeUser, listUsers, editUser });
export default userService;
export { addUser, listUsers, editUser, removeUser };
