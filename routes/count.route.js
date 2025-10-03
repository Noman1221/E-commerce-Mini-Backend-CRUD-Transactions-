import express from "express";
import { decCount, incCount } from "../controllers/count.controller.js";
const router = express();

router.put("/increment", incCount)
router.put("/decrement", decCount);
export default router;