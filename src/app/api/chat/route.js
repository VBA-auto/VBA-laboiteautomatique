// /app/api/chat/route.js

import { NextResponse } from "next/server";
import { buildAIPrompt } from "@/lib/buildAIPrompt";
import { resolveData } from "@/lib/resolveData";

export async function POST(req) {
  const body = await req.json();
  const userMessage = body.message;

  // 1. Resolve data (ref, errorCode, static, etc.)
  const { type, data } = await resolveData(userMessage);

  // 2. Build AI prompt
  const aiPrompt = buildAIPrompt({ type, data, userMessage });

  // 3. Call AI API (OpenRouter, OpenAI, etc.)
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        Referer: "https://laboiteautomatique.com",
      },
      body: JSON.stringify({
        model: "openai/gpt-4.1",
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content:
              "You are a helpful, friendly, and professional customer support assistant for the website laboiteautomatique.com. Always answer in the same language as the user's question (Bangla, English, French, etc). Use the product info if available. If you don’t know the answer, politely say you don’t have that information.",
          },
          {
            role: "user",
            content: aiPrompt,
          },
        ],
      }),
    });

    const data = await res.json();

    if (data?.choices?.[0]?.message?.content) {
      return NextResponse.json({ message: data.choices[0].message.content });
    } else {
      return NextResponse.json({
        message: data?.error?.message || "GPT response error.",
      });
    }
  } catch (err) {
    console.error("❌ Chat Error:", err);
    return NextResponse.json({ message: "Server error." });
  }
}
