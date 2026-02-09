// src/services/aiService.js
export async function sendToAI({ idea, prd }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return `
App Idea:
${idea}

PRD:
${prd}



`;
}
