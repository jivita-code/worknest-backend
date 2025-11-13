import { seedFeatures } from "../../services/features.service";
async function main() {
    try {
        await seedFeatures();
        console.log("Seeding completed.");
    }
    catch (error) {
        console.error("Seeding failed:", error);
    }
}
main();
