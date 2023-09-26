import { Router } from "express";
import {
  createCharacter,
  getCharacter,
} from "../controller/character.controller.js";

const router = Router();

router.get("/character", getCharacter);
router.post("/character", createCharacter);
router.put("/character/:id");
router.delete("/character/:id");

export default router;
