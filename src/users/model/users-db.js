import Id from "../../Id";
export default function makeUsersDb({ User, accessToken }) {
  return Object.freeze({
    findAll,
    findById,
    insert,
    remove,
    update,
    getUserCount,
    findByHash,
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
    return await User.findById({ _id });
  }

  async function insert({ id: _id = Id.makeId(), ...userInfo }) {
    console.log(userInfo);
    const payload = {
      user: {
        id: userInfo._id,
      },
    };
    const token = accessToken(payload);
    const user = new User({ _id, ...userInfo });
    await user.save();
    return {
      created: user,
      token,
    };
  }

  async function remove({ _id }) {
    return await User.findByIdAndDelete({ _id });
  }

  async function update({ _id, ...userInfo }) {
    return await User.findByIdAndUpdate({ _id, ...userInfo });
  }

  async function getUserCount() {
    return await User.estimatedDocumentCount({});
  }

  async function findByHash(user) {
    return await User.find({ hash: user.hash });
  }
}
