export function sanitizeInput(obj) {
  // Basic sanitizer – extend as needed
  return JSON.parse(JSON.stringify(obj));
}
