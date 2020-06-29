export default function buildMakeTask({ md5 }) {
  return function makeTask({
    task_name,
    createdAt = Date.now(),
    modifiedOn = Date.now(),
  }) {
    if (!task_name) {
      throw new Error("Task name cannot be empty.");
    }
    let hash;

    return Object.freeze({
      getTaskName: () => task_name,
      getCreatedAt: () => createdAt,
      getModifiedOn: () => modifiedOn,
      getHash: () => hash || (hash = makeHash()),
    });

    function makeHash() {
      return md5((task_name || "") + createdAt);
    }
  };
}
