let cachedData = null;

export async function errorCodeProvider(userMessage) {
  // 1. Extract any code (DF457, DTC940811, P0741, etc.)
  const errorCodeRegex = /\b([A-Z]{2,4}[0-9]{3,6})\b/gi;
  const matches = userMessage.match(errorCodeRegex);

  if (!cachedData) {
    const res = await fetch("https://laboiteautomatique.com/errorCodes.json");
    cachedData = await res.json();
  }

  // 2. Try direct match for all found codes
  if (matches) {
    for (const code of matches) {
      const found = cachedData.find(
        (item) =>
          (item.code && item.code.toUpperCase() === code.toUpperCase()) ||
          (item.description &&
            item.description.toUpperCase().includes(code.toUpperCase())) ||
          (item.subTitle &&
            item.subTitle.toUpperCase().includes(code.toUpperCase())) ||
          (item.aide && item.aide.toUpperCase().includes(code.toUpperCase()))
      );
      if (found) return found;
    }
  }

  // 3. Fuzzy search: check if user message matches any description/subTitle/aide
  const lowerMsg = userMessage.toLowerCase();
  const fuzzy = cachedData.find(
    (item) =>
      (item.description && lowerMsg.includes(item.description.toLowerCase())) ||
      (item.subTitle && lowerMsg.includes(item.subTitle.toLowerCase())) ||
      (item.aide && lowerMsg.includes(item.aide.toLowerCase()))
  );

  // 4. If not found, try partial word match (basic)
  if (!fuzzy) {
    for (const item of cachedData) {
      if (
        (item.description &&
          item.description
            .toLowerCase()
            .split(" ")
            .some((word) => lowerMsg.includes(word))) ||
        (item.subTitle &&
          item.subTitle
            .toLowerCase()
            .split(" ")
            .some((word) => lowerMsg.includes(word))) ||
        (item.aide &&
          item.aide
            .toLowerCase()
            .split(" ")
            .some((word) => lowerMsg.includes(word)))
      ) {
        return item;
      }
    }
  }

  return fuzzy || null;
}
