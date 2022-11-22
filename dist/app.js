"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routers/users/users.routes"));
const app = (0, express_1.default)();
app.set("port", process.env.PORT || 3001);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/users", users_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map