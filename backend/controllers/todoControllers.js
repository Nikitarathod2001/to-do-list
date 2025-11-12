import todosModel from "../models/todosModel.js";


// --- API to add task ---
const addTask = async(req, res) => {
  try {

    const {task} = req.body;
    const userId = req.userId;

    if(task.trim() === "") {
      return res.json({
        success: false,
        message: "Enter your task"
      });
    }

    const newTodo = await todosModel({task, userId});
    await newTodo.save();

    res.json({
      success: true,
      message: "Task added"
    });

    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};

// --- API to get todo-list ---
const getTodoList = async (req, res) => {
  try {

    const userId = req.userId;

    const todos = await todosModel.find({userId});

    res.json({
      success: true,
      todos
    });
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};

// --- API to change status for completed ---
const changeStatus = async (req, res) => {
  try {

    const {todoId} = req.body;

    const todoItem = await todosModel.findById(todoId);

    todoItem.completed = todoItem.completed === "true" ? "false" : "true";
    todoItem.save();

    res.json({
      success: false,
      todoItem
    });
    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    });
  }
};

export {addTask, getTodoList, changeStatus};