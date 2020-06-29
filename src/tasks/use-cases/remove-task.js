export default function makeRemoveTask({ tasksDb }) {
  return async function removeTask({ _id } = {}) {
    if (!_id) {
      throw new Error("You must supply an id.");
    }
    const taskToDelete = await tasksDb.findById({ _id });
    if (!taskToDelete) {
      return deleteNothing();
    }
    return hardDelete(taskToDelete);

    function deleteNothing() {
      return {
        deletedCount: 0,
        message: "No task to delete.",
      };
    }

    async function hardDelete(task) {
      await tasksDb.remove(task);
      return {
        deletedCount: 1,
        message: "Task deleted successfully.",
      };
    }
  };
}
