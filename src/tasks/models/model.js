import mongoose from "mongoose";
import Id from "../../Id";
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task_name: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Number,
    default: Date.now(),
  },
  modifiedOn: {
    type: Date,
    default: Date.now(),
  },
  _id: {
    type: String,
    required: true,
    default: Id.makeId(),
  },
});

const Task = mongoose.model("Task", TaskSchema);
export default Task;
