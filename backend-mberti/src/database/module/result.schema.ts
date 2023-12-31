import { Type, typedModel } from "ts-mongoose";
import { bimestreEnum, disciplinasEnum } from "./enums";
import mongoConnection from "../config/mongo";
import mongoose from "../config/mongo";

interface Disciplina{
  
    name: string,
    bimestre: string,
    grade: number,
  
}


const DisciplinaSchema = new mongoose.Schema<Disciplina>(
  {
    name: Type.string({ required: true, enum: disciplinasEnum }),
    bimestre: Type.string({required:true, enum: bimestreEnum}),
    grade: Type.number({ required: true, min: 0, max: 10 }),
  },
  {
    _id:true,
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const DisciplinaModel = mongoose.model<Disciplina>("Disciplina", DisciplinaSchema);



export default DisciplinaModel



