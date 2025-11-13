import { deleteAllFeatures } from "../../services/features.service.js";

async function main() {
  try {
    await deleteAllFeatures();
    console.log("Deleting completed.");
  } catch (error) {
    console.error("Deleting failed:", error);
  }
}

main();