"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (app) => {
    const router = (0, express_1.Router)();
    app.use(router);
};
exports.default = routes;
