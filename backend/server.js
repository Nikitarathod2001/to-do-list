import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";

const app = express();
const PORT = process.env.PORT;

// --- Built-in Middlewares ---
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});