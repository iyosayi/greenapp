import makeTasksDb from "./tasks-db";
import Task from "./model";

const tasksDb = makeTasksDb({ Task });
export default tasksDb;
