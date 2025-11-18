import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoute from "./routes/chat.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/chat", chatRoute);

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("AI Node Backend (proxy) is running"));
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
