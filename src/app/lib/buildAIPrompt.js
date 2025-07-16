// /lib/buildAIPrompt.js

// This function builds the AI prompt based on data type and content

export function buildAIPrompt({ type, data, userMessage }) {
  if (type === "ref") {
    // Build prompt for product ref code
    return `
User asked: "${userMessage}"

Here is the product info from the database:
- Reference: ${data.ref}
- Title: ${data.title}
- Description: ${data.description}
- Compatibility: ${data.compatibility}
- Warranty: ${data.warranty}
- Brand: ${data.brand}
- Stock: ${data.stock}
- Price: ${data.finalPrice} EUR
- Coupon: ${data.coupon}
- Payment link: ${data.payLink}

Do **not** mention any promo code, even if you see one in the data.  
Instead, tell the user: "There may be a promo code available. Please check our [promo page](https://laboiteautomatique.com/promo) for current offers."

Please answer the user in the same language as their question.  
Use the product info to explain what this part is, mention if it's in stock, and give any extra info that might help the customer.  
**Format your answer with line breaks, bullet points, and clear sections. Use Markdown if possible.**
    `.trim();
  }

  if (type === "errorCode") {
    return `
User asked: "${userMessage}"

Here is the ONLY error code info from the database that matches the user's question:
- Code: ${data.code}
- Description: ${data.description}
- SubTitle: ${data.subTitle}
- Advice: ${data.aide}

Do **not** mention any promo code, even if you see one in the data.  
Instead, tell the user: "There may be a promo code available. Please check our [promo page](https://laboiteautomatique.com/promo) for current offers."
Do NOT invent or guess any other code or explanation. If the user asks for a code, only use the code from the database above. If the user asks for an explanation, only use the description, subTitle, and advice from the database above. If the database does not contain a code or explanation, politely say so.

Please answer the user in the same language as their question. Format your answer with line breaks, bullet points, and clear sections. Use Markdown if possible.
  `.trim();
  }

  if (type === "vehicule") {
    return `
User asked: "${userMessage}"

Here is the vehicle product info from the database:
- Model: ${data.model}
- Type: ${data.type}
- Title: ${data.title}
- Description: ${data.description}
- Condition: ${data.etat}
- Warranty: ${data.garantie}
- Stock: ${data.stock}
- Price: ${data.finalPrice} EUR
- Payment link: ${data.payLink}


Do **not** mention any promo code, even if you see one in the data.  
Instead, tell the user: "There may be a promo code available. Please check our [promo page](https://laboiteautomatique.com/promo) for current offers."
Please answer the user in the same language as their question.
Use the product info to explain what is available for their vehicle, mention if it's in stock (show the stock number), and give any extra info that might help the customer.
**Format your answer with line breaks, bullet points, and clear sections. Use Markdown if possible.**
  `.trim();
  }

  // Fallback: just use user message
  return userMessage;
}
