import { Router } from "express";
const router = Router();

router.get("/env", (req, res) => {
  res.status(200).json({
    database_url: process.env.DATABASE_URL,
  });
});

export default router;
