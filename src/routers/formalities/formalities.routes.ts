import express from "express";
import { createFormalityInDatabase } from "../../controllers/formalities/createFormalityInDataBase";
import { deleteFormalityInDatabase } from "../../controllers/formalities/deleteFormalityInDatabase";
import { getFormalitiesFromDatabase } from "../../controllers/formalities/getFormalitiesFromDatabase";
import { updateFormalityInDatabase } from "../../controllers/formalities/updateFormalityInDatabase";

const router = express.Router();
router.get("/", getFormalitiesFromDatabase);
router.post("/", createFormalityInDatabase);
router.delete("/:formalityId", deleteFormalityInDatabase);
router.put("/:formalityId", updateFormalityInDatabase);

export default router;