import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  todoText: {
    type: String
  },
  completed: {
    type: String,
    default: "false"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "users"
  }
});

const todosModel = mongoose.model("todos", todosSchema);

export default todosModel;