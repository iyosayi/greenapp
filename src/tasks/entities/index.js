import { createHash } from "crypto";
import buildMakeTask from "./factory";

const makeTask = buildMakeTask({ md5 });
export default makeTask;

function md5(task) {
  return createHash("md5").update(task, "utf8").digest("hex");
}
