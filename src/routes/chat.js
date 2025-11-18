import express from "express";
import { sendChatToOpenAI } from "../services/openaiService.js";

const router = express.Router();

// Simple POST /chat
// body: { messages: [{ role: 'user'|'system'|'assistant', content: '...'}] }
router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages) return res.status(400).json({ error: "messages are required" });

    // For initial version we forward to OpenAI and return the response.
    const aiResult = await sendChatToOpenAI(messages);
    res.json(aiResult);
  } catch (err) {
    console.error("Chat route error:", err);
    res.status(500).json({ error: "internal_error" });
  }
});

export default router;
