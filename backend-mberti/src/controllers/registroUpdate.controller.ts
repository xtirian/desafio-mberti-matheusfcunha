import { Request, Response, NextFunction } from "express";
import DisciplinaModel from "../database/module/result.schema";
import { bimestreEnum, disciplinasEnum } from "../database/module/enums";

//updating only the grade.
export const updateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const id = req.body.id;  
  const nota = req.body.grade;

  if (!nota) {
    return res.status(400).send({
      message:
        "Couldn't handle this request. Verify the if all fields was filleds",
    });
  }
  
  // VALIDATING 'GRADE'

  if (nota < 0 || nota > 10) {
    return res.status(400).send({
      message: `Please, insert a grade between 0 and 10`,
    });
  }

  try {
    const disciplinaAtualizada = await DisciplinaModel.findOneAndUpdate({id: id}, {
      grade: nota,
    });

    return res.status(200).send({
      message: `Nota atualizada para ${nota}`
    });
  } catch (error) {
    console.error(error)
  }
};