let cachedData = null;

export async function vehiculeProvider(userMessage) {
  if (!cachedData) {
    const res = await fetch(
      "https://laboiteautomatique.com/searchVehicule.json"
    );
    cachedData = await res.json();
  }

  const lowerMsg = userMessage.toLowerCase();

  // 1. Find model match (model or model2)
  const modelObj = cachedData.find(
    (item) =>
      (item.model && lowerMsg.includes(item.model.toLowerCase())) ||
      (item.model2 && lowerMsg.includes(item.model2.toLowerCase()))
  );

  if (!modelObj) return null;

  // 2. Find type (diesel, essence, etc.) in user message
  let typeKey = null;
  if (modelObj.types) {
    for (const key of Object.keys(modelObj.types)) {
      if (lowerMsg.includes(key)) {
        typeKey = key;
        break;
      }
    }
  }

  // 3. If type found, return that type's data
  if (typeKey) {
    return {
      ...modelObj.types[typeKey],
      model: modelObj.model,
      model2: modelObj.model2,
      type: typeKey,
    };
  }

  // 4. If no type found, but model matched, return all types (as array)
  if (modelObj.types) {
    // Return first type as default, or you can return all as array for multiple suggestion
    const firstType = Object.keys(modelObj.types)[0];
    return {
      ...modelObj.types[firstType],
      model: modelObj.model,
      model2: modelObj.model2,
      type: firstType,
      // allTypes: modelObj.types // (optional: send all for AI to suggest)
    };
  }

  return null;
}
