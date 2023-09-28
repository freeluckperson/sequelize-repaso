import { Router } from "express";
import {
  createCharacter,
  getCharacter,
  updateCharacter,
  deleteChar,
} from "../controller/character.controller.js";

const router = Router();

router.get("/character", getCharacter);
router.post("/character", createCharacter);
router.put("/character", updateCharacter);
router.delete("/character", deleteChar);

export default router;
