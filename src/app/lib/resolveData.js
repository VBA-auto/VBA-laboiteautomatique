// /lib/resolveData.js

import { errorCodeProvider } from "./providers/errorCodeProvider";
import { refProvider } from "./providers/refProvider";
import { vehiculeProvider } from "./providers/vehiculeProvider";

// This function checks each provider in order and returns the first match
export async function resolveData(userMessage) {
  // 3. Try vehicule provider
  const vehiculeData = await vehiculeProvider(userMessage);
  if (vehiculeData) return { type: "vehicule", data: vehiculeData };

  // 1. Try ref code provider
  const refData = await refProvider(userMessage);
  if (refData) return { type: "ref", data: refData };

  // 2. Try error code provider
  const errorData = await errorCodeProvider(userMessage);
  if (errorData) return { type: "errorCode", data: errorData };

  // 4. No match found
  return { type: null, data: null };
}
