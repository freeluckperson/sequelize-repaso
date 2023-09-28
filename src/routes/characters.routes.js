import { Router } from "express";
import {
  createCharacter,
  getCharacter,
  updateCharacter,
} from "../controller/character.controller.js";

const router = Router();

router.get("/character", getCharacter);
router.post("/character", createCharacter);
router.put("/character", updateCharacter);
router.delete("/character/:id");

export default router;
