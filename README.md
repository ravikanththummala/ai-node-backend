# AI Node Backend (OpenAI Proxy) - Sample

This is a starter Node.js backend that acts as a secure proxy to the OpenAI Chat API.
It's designed to be paired with a mobile client (e.g., iOS app) so API keys are never stored in the app.

## Quick start

1. Install:
   ```bash
   npm install
   ```

2. Create a `.env` file (see `.env.example`):
   ```
   OPENAI_API_KEY=your_api_key_here
   PORT=3000
   OPENAI_MODEL=gpt-4o-mini
   ```

3. Run dev server:
   ```bash
   npm run dev
   ```

4. Example request:
   ```bash
   curl -X POST http://localhost:3000/chat \
     -H "Content-Type: application/json" \
     -d '{ "messages": [{ "role": "user", "content": "Hello from iOS client" }] }'
   ```

## Notes
- This project is intentionally simple. For production you should:
  - Add authentication (JWT)
  - Add rate limiting
  - Add streaming support (SSE / WebSocket) if you want progressive updates
  - Add input sanitization & moderation
  - Add logging & monitoring
