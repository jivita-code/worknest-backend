import { deleteAllPlans } from "../../services/plans.service";
async function main() {
    try {
        await deleteAllPlans();
        console.log("Deleting completed.");
    }
    catch (error) {
        console.error("Deleting failed:", error);
    }
}
main();
//# sourceMappingURL=delete-plans.js.map