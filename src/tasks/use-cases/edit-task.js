import makeTask from "../entities";
export default function makeEditTask({ tasksDb }) {
  return async function editTask({ _id, ...changes } = {}) {
    if (!_id) {
      throw new Error("You must supply a valid id.");
    }
    if (!changes) {
      throw new Error("You must enter valid details");
    }
    const existing = await tasksDb.findById({ _id });
    if (!existing) {
      throw new Error("Task not found.");
    }
    const task = makeTask({ ...existing, ...changes });
    if (task.getHash() === existing.getHash()) {
      return task;
    }

    return Object.freeze({
      task_name: task.getTaskName(),
      hash: task.getHash(),
      modifiedOn: task.getModifiedOn(),
    });
  };
}
