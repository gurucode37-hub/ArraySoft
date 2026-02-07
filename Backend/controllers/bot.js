import { GoogleGenerativeAI } from "@google/generative-ai";
import { chatbotData } from "../data/data.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const botChat = async (req, res) => {
  try {
    const { userInput } = req.body;
    if (!userInput) {
      return res.status(400).json({ error: "userInput is required" });
    }

    // Use the most compatible, working model string found via searching.
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", 
    });

    const prompt = `
      You are a professional chatbot for ArraySoft Technology.
      STRICT RULES:
      1. Answer ONLY using the DATA provided below.
      2. If the answer is NOT in DATA, reply EXACTLY: "This information is not available. Please contact our team at +91 7383669390."

      DATA: ${JSON.stringify(chatbotData)}
      User Question: ${userInput}
      
      Give a short, clear, professional answer.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    return res.status(200).json({
      recommendation: text,
      fallback: false,
    });

  } catch (error) {
    console.error("Bot Error Detail:", error.message);
    
    // If the error persists, the API key itself is likely the issue.
    return res.status(500).json({
      error: "API Key is invalid or not working. Please generate a new key from ."
    });
  }
};
