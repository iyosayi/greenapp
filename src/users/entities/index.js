import crypto from "crypto";
import buildMakeUser from "./factory";
import Id from "../../Id";

const makeUser = buildMakeUser({ md5, Id });

function md5(text) {
  return crypto.createHash("md5").update(text, "utf8").digest("hex");
}

export default makeUser;
