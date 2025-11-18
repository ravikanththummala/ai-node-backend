import fetch from "node-fetch";

/*
  Minimal OpenAI proxy service.
  It expects OPENAI_API_KEY in environment variables.
  This uses the Chat Completions endpoint as an example.
  Adjust the endpoint/body to the Responses API if you prefer.
*/

export async function sendChatToOpenAI(messages) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error("OPENAI_API_KEY not set on server");

  const resp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      messages,
      temperature: 0.7,
      max_tokens: 800
    })
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`OpenAI error ${resp.status}: ${text}`);
  }

  const data = await resp.json();
  return data;
}
