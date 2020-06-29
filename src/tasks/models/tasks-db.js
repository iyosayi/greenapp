export default function makeTasksDb({ Task }) {
  return Object.freeze({
    findAll,
    findByHash,
    findById,
    insert,
    remove,
    update,
    getTaskCount,
  });

  async function findAll({ max = 60, before, after } = {}) {
    const query = {};
    if (before || after) {
      query._id = {};
      query._id = before ? { ...query._id, $lt: before } : query._id;
      query._id = after ? { ...query._id, $gt: after } : query._id;
    }
    return await User.find(query).limit(Number(max));
  }
  async function findById({ _id }) {
    return await Task.findById({ _id });
  }

  async function insert({ id: _id = Id.makeId(), ...taskInfo }) {
    const task = new Task({ _id, ...taskInfo });
    await task.save();
    return {
      created: task,
    };
  }

  async function remove({ _id }) {
    return await Task.findByIdAndDelete({ _id });
  }

  async function update({ _id, ...userInfo }) {
    return await Task.findByIdAndUpdate({ _id, ...userInfo });
  }

  async function getTaskCount() {
    return await Task.estimatedDocumentCount({});
  }

  async function findByHash(task) {
    return await Task.find({ hash: task.hash });
  }
}
