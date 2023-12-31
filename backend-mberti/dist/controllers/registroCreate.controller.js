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
exports.postController = void 0;
const result_schema_1 = __importDefault(require("../database/module/result.schema"));
const enums_1 = require("../database/module/enums");
const postController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const disciplina = req.body.name;
    const bimestre = req.body.bimestre;
    const nota = req.body.grade;
    if (!disciplina || !bimestre || !nota) {
        return res.status(400).send({
            message: "Couldn't handle this request. Verify the if all fields was filleds",
        });
    }
    //VALIDATING 'DISCIPLINA'
    if (!enums_1.disciplinasEnum.find((item) => item == disciplina)) {
        return res.status(400).send({
            message: `You can't make this request for the 'disciplina: ${disciplina}'. The 'disciplinas' alloweds are ${enums_1.disciplinasEnum}  `,
        });
    }
    // VALIDATING 'BIMESTRE'
    if (!enums_1.bimestreEnum.find((item) => item == bimestre)) {
        return res.status(400).send({
            message: `You can't make this request for the 'bimestre: ${bimestre}'. The 'bimestres' alloweds are ${enums_1.bimestreEnum} `,
        });
    }
    // VALIDATING 'GRADE'
    if (nota < 0 || nota > 10) {
        return res.status(400).send({
            message: `Please, insert a grade between 0 and 10`,
        });
    }
    //VALIDATIONG IF IT ALREADY EXIST
    let checkTest = yield checkDB(bimestre, disciplina);
    if (checkTest) {
        return res.status(406).send({
            message: `${disciplina} already exist in ${bimestre} BIMESTRE`,
        });
    }
    try {
        const DisciplinaCriada = yield result_schema_1.default.create({
            name: disciplina,
            bimestre: bimestre,
            grade: nota,
        });
        DisciplinaCriada.save();
        return res.status(201).json(DisciplinaCriada);
    }
    catch (error) {
        console.error(error);
    }
});
exports.postController = postController;
const checkDB = (bimestre, disciplina) => __awaiter(void 0, void 0, void 0, function* () {
    let filter = { name: disciplina, bimestre: bimestre };
    try {
        if (yield result_schema_1.default.findOne(filter)) {
            return true;
        }
    }
    catch (error) {
        return false;
    }
});
