"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ROUTES
const result_1 = __importDefault(require("./routes/result"));
const routes = (app) => {
    app.use("/results", result_1.default);
    return;
};
exports.default = routes;
