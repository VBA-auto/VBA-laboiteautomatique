import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const userMessage = body.message;
  console.log("✅ API Key Loaded:", process.env.OPENROUTER_API_KEY);

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        Referer: "http://localhost:3000",
      },
      body: JSON.stringify({
        model: "openai/gpt-4.1",
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content:
              "You are a helpful, friendly, and professional customer support assistant for the website laboiteautomatique.com.\n\nBelow is the list of important website pages and references. Use the information on these pages to answer customer questions accurately and politely.\n\nImportant website URLs:\n- https://laboiteautomatique.com\n- https://laboiteautomatique.com/produits\n- https://laboiteautomatique.com/sitemap\n- https://laboiteautomatique.com/contact\n- https://laboiteautomatique.com/prestation/programmation\n- https://laboiteautomatique.com/prestation/installation\n- https://laboiteautomatique.com/prestation/reparation\n- https://laboiteautomatique.com/ressource/aide-en-ligne\n- https://laboiteautomatique.com/ressource/faq\n- https://laboiteautomatique.com/ressource/tutoriels\n- https://laboiteautomatique.com/ressource/blogs/calibrage\n- https://laboiteautomatique.com/ressource/blogs/verification-parametrage\n- https://laboiteautomatique.com/ressource/blogs/differentes-boites-DC4\n- https://laboiteautomatique.com/ressource/blogs/adaptation-calibrage\n- https://laboiteautomatique.com/ressource/blogs/remplacement-calculateur\n- https://laboiteautomatique.com/ressource/blogs/presentation-vba\n- https://laboiteautomatique.com/presentation\n- https://laboiteautomatique.com/ressource/blogs/test-embrayage-edc\n- https://laboiteautomatique.com/ressource/articles\n- https://laboiteautomatique.com/selectionnez-votre-vehicule\n- https://laboiteautomatique.com/captur\n- https://laboiteautomatique.com/captur/essence\n- https://laboiteautomatique.com/captur/diesel\n- https://laboiteautomatique.com/clio\n- https://laboiteautomatique.com/clio-5\n- https://laboiteautomatique.com/clio/essence\n- https://laboiteautomatique.com/clio-5/essence\n- https://laboiteautomatique.com/clio/diesel\n- https://laboiteautomatique.com/megane\n- https://laboiteautomatique.com/megane-4\n- https://laboiteautomatique.com/megane/essence\n- https://laboiteautomatique.com/megane-4/diesel\n- https://laboiteautomatique.com/megane/diesel\n- https://laboiteautomatique.com/scenic\n- https://laboiteautomatique.com/scenic/diesel\n- https://laboiteautomatique.com/fluence\n- https://laboiteautomatique.com/fluence/diesel\n- https://laboiteautomatique.com/clio-rs\n- https://laboiteautomatique.com/clio-rs/essence\n- https://laboiteautomatique.com/dc4_soft\n- https://laboiteautomatique.com/twingo-3\n- https://laboiteautomatique.com/twingo-3/essence\n\nWhen a customer asks a question, answer using the information available on these pages. If you don’t know the answer, politely say you don’t have that information.",
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
      }),
    });

    const data = await res.json();
    console.log("🔍 GPT Raw Response:", JSON.stringify(data, null, 2));

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
