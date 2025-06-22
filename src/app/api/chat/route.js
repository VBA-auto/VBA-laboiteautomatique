import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();

  const userMessage = body.message;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer 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",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a helpful, friendly, and professional customer support chatbot for a t-shirt e-commerce store. 
          You answer questions politely, confidently, and try to guide the customer clearly.`,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    }),
  });

  const data = await res.json();
  return NextResponse.json({ message: data.choices?.[0]?.message?.content });
}
