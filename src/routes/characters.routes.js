import { Router } from "express";
import {
  createCharacter,
  getCharacter,
  bulkCreateCharacter,
  updateCharacter,
  deleteChar,
} from "../controller/character.controller.js";

const router = Router();

router.get("/character", getCharacter);
router.post("/character", createCharacter);
router.post("/character/bulk", bulkCreateCharacter);
router.put("/character", updateCharacter);
router.delete("/character", deleteChar);

export default router;
