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

export {addTask};