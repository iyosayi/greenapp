export default function makeListTasks({ tasksDb }) {
  return async function listTasks({ _id, max, before, after } = {}) {
    if (!_id) {
      throw new Error("You must supply a valid id.");
    }
    const tasks = _id
      ? await tasksDb.findById({ _id })
      : tasksDb.findAll({ max, after, before });
    return tasks;
  };
}
