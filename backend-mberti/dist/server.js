"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//SERVER CONFIG IMPORTS
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_2 = require("express");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
const route = (0, express_2.Router)(); // TODO REMOVE THIS LATER AND PASS FOR ROUTES
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
dotenv_1.default.config();
// SWAGGER CONFIG
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./documentation/swagger_output.json"));
const swaggerOptions = { customCssUrl: 'swagger-ui.css' };
// Starting the server
if (process.env.NODE_ENV === "develop" || process.env.NODE_ENV === "production") {
    app.get("/", (req, res) => {
        res.json({
            message: `Hello world with Typescript, on port ${process.env.PORT}`,
        });
    });
    app.use("/doc", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default, swaggerOptions));
    app.listen(process.env.PORT, () => `Server runing on port ${process.env.PORT}`);
} //since this project don't require authentication, I'll put this return for both cases
//TODO: EXPORT ROUTES
app.use(route);
exports.default = app;
