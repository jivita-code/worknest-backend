import { seedPlans } from "../../services/plans.service";
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
//# sourceMappingURL=seed-plans.js.map