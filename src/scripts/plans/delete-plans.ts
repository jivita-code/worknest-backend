import { deleteAllPlans } from "../../services/plans.service.js";

async function main() {
  try {
    await deleteAllPlans();
    console.log("Deleting completed.");
  } catch (error) {
    console.error("Deleting failed:", error);
  }
}

main();