import { seedPlans } from "../../services/plans.service.js";
async function main() {
    try {
        await seedPlans();
        console.log("Seeding completed.");
    }
    catch (error) {
        console.error("Seeding failed:", error);
    }
}
main();
