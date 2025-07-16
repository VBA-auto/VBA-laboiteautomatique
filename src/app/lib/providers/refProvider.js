// /lib/providers/refProvider.js

// This provider extracts ref code from user message and fetches product info from searchData.json

let cachedData = null;

export async function refProvider(userMessage) {
  // 1. Extract ref code (8+ chars, alphanumeric)
  const refCodeRegex = /[A-Z0-9]{8,}/i;
  const match = userMessage.match(refCodeRegex);
  if (!match) return null;

  const refCode = match[0];

  // 2. Fetch and cache data
  if (!cachedData) {
    const res = await fetch("https://laboiteautomatique.com/searchData.json");
    cachedData = await res.json();
  }

  // 3. Find product by ref code
  const product = cachedData.find(
    (item) => item.ref && item.ref.toLowerCase() === refCode.toLowerCase()
  );

  // 4. Return product info if found, else null
  return product || null;
}
