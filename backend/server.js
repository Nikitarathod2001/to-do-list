import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRouter.js";
import todoRouter from "./routes/todoRouter.js";

const app = express();
const PORT = process.env.PORT;

// --- Built-in Middlewares ---
app.use(cors());
app.use(express.json());

connectDB();

// --- API Endpoints ---
app.use("/api/user", userRouter);
app.use("/api/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});