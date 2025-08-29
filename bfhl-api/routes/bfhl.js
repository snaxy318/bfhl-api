import { Router } from "express";
import { handleBfhl } from "../controllers/bfhlController.js";

const router = Router();

router.post("/", handleBfhl);

export default router;
