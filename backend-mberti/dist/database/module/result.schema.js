"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts_mongoose_1 = require("ts-mongoose");
const enums_1 = require("./enums");
const mongo_1 = __importDefault(require("../config/mongo"));
const DisciplinaSchema = new mongo_1.default.Schema({
    name: ts_mongoose_1.Type.string({ required: true, enum: enums_1.disciplinasEnum }),
    bimestre: ts_mongoose_1.Type.string({ required: true, enum: enums_1.bimestreEnum }),
    grade: ts_mongoose_1.Type.number({ required: true, min: 0, max: 10 }),
}, {
    _id: true,
    timestamps: {
        createdAt: true,
        updatedAt: true,
    },
});
const DisciplinaModel = mongo_1.default.model("Disciplina", DisciplinaSchema);
exports.default = DisciplinaModel;
