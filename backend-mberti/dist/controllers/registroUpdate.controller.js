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
exports.updateController = void 0;
const result_schema_1 = __importDefault(require("../database/module/result.schema"));
//updating only the grade.
const updateController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { disciplinaId } = req.params;
    let grade;
    if (req.body.data) {
        grade = req.body.data.grade;
    }
    if (!grade || req.body.data == undefined) {
        return res.status(400).send({
            message: "Couldn't handle this request. Verify the if all fields was filleds",
        });
    }
    // VALIDATING 'GRADE'
    if (grade < 0 || grade > 10) {
        return res.status(400).send({
            message: `Please, insert a grade between 0 and 10`,
        });
    }
    try {
        const disciplinaAtualizada = yield result_schema_1.default.findOneAndUpdate({ _id: disciplinaId }, {
            grade: grade,
        });
        return res.status(200).json(disciplinaAtualizada);
    }
    catch (error) {
        console.error(error);
    }
});
exports.updateController = updateController;
