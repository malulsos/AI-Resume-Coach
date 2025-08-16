// lib/ai.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function generateResumeFeedback(resumeText: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
  You are an expert resume coach.
  Analyze the following resume text and suggest:
  - Key strengths
  - Weaknesses
  - Specific improvements
  - ATS keywords it might be missing

  Resume:
  ${resumeText}
  `;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
