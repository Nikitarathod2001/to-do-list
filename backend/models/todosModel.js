import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  task: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "users"
  }
});

const todosModel = mongoose.model("todos", todosSchema);

export default todosModel;