"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const result_schema_1 = __importDefault(require("../database/module/result.schema"));
//CONTROLLERS
const registroCreate_controller_1 = require("../controllers/registroCreate.controller");
const registroUpdate_controller_1 = require("../controllers/registroUpdate.controller");
const router = (0, express_1.Router)();
/* GET results listing. */
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const disciplinas = yield result_schema_1.default.find({});
        return res.status(200).json(disciplinas);
    }
    catch (error) {
        console.error("Erro na consulta ao banco de dados:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
}));
router.post("/", registroCreate_controller_1.postController);
router.put(`/:disciplinaId`, registroUpdate_controller_1.updateController);
router.delete('/:disciplinaId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { disciplinaId } = req.params;
    yield result_schema_1.default.findOneAndDelete({ _id: disciplinaId });
    return res.status(200).send({
        message: "Deleted successfully"
    });
}));
exports.default = router;
