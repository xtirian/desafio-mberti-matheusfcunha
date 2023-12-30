"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//SERVER CONFIG IMPORTS
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
dotenv_1.default.config();
// SWAGGER CONFIG
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_output_json_1 = __importDefault(require("./documentation/swagger_output.json"));
const swaggerOptions = { customCssUrl: "swagger-ui.css" };
// Starting the server
if (process.env.NODE_ENV == "develop" ||
    process.env.NODE_ENV == "production" //since this project don't require authentication, I'll put the same return for both cases
) {
    app.get("/", (req, res) => {
        /* #swagger.ignore=true*/ res.redirect("/doc");
    });
    app.use("/doc", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_output_json_1.default, swaggerOptions));
    app.listen(process.env.PORT, () => `Server runing on port ${process.env.PORT}`);
}
(0, routes_1.default)(app);
//TODO: EXPORT ROUTES
exports.default = app;
