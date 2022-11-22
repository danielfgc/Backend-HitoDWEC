import express from "express";
import { createUserInDatabase } from "../../controllers/users/createUserInDatabase";
import { deleteAUserFromDatabase } from "../../controllers/users/deleteUserInDatabase";
import { getUsersFromDatabase } from "../../controllers/users/getUsersFromDatabase";
import { updateAUserInDatabase } from "../../controllers/users/updateUserInDatabase";

const router= express.Router();
router.get("/",getUsersFromDatabase);
router.post("/", createUserInDatabase);
router.delete("/:userId", deleteAUserFromDatabase);
router.put("/:userId", updateAUserInDatabase);

export default router;
