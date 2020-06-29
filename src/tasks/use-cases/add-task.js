import makeTask from "../entities";
export default function makeAddTask({ tasksDb }) {
  return async function addTask(taskInfo) {
    const task = makeTask(taskInfo);
    const exists = await tasksDb.findByHash({ hash: task.getHash() });
    if (exists) {
      return exists;
    }

    return tasksDb.insert({
      task_name: task.getTaskName(),
      hash: task.getHash(),
      createdAt: task.getCreatedAt(),
      modifiedOn: task.getModifiedOn(),
    });
  };
}
