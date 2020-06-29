import makePostUser from "./post-user";
import { addUser } from "../use-cases/index";

const postUser = makePostUser({ addUser });
const userController = Object.freeze({ postUser });
export default userController;
export { postUser };
