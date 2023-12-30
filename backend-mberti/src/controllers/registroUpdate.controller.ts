import { Request, Response, NextFunction } from "express";
import DisciplinaModel from "../database/module/result.schema";
import { bimestreEnum, disciplinasEnum } from "../database/module/enums";

//updating only the grade.
export const updateController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { disciplinaId } = req.params;
  let grade;
  if (req.body.data) {
    grade = req.body.data.grade;
  }

  if (!grade || req.body.data == undefined) {
    return res.status(400).send({
      message:
        "Couldn't handle this request. Verify the if all fields was filleds",
    });
  }

  // VALIDATING 'GRADE'

  if (grade < 0 || grade > 10) {
    return res.status(400).send({
      message: `Please, insert a grade between 0 and 10`,
    });
  }

  try {
    const disciplinaAtualizada = await DisciplinaModel.findOneAndUpdate(
      { _id: disciplinaId },
      {
        grade: grade,
      }
    );

    return res.status(200).json(disciplinaAtualizada);
  } catch (error) {
    console.error(error);
  }
};
