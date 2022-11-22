"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUserInDatabase_1 = require("../../controllers/users/createUserInDatabase");
const getUsersFromDatabase_1 = require("../../controllers/users/getUsersFromDatabase");
const router = express_1.default.Router();
router.get("/", getUsersFromDatabase_1.getUsersFromDatabase);
router.post("/", createUserInDatabase_1.createUserInDatabase);
exports.default = router;
//# sourceMappingURL=users.routes.js.map