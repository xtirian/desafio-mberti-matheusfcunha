import { Request, Response, NextFunction } from "express";
import DisciplinaModel from "../database/module/result.schema";
import { bimestreEnum, disciplinasEnum } from "../database/module/enums";

export const postController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const disciplina = req.body.name;
  const bimestre = req.body.bimestre;
  const nota = req.body.grade;

  if (!disciplina || !bimestre || !nota) {
    return res.status(400).send({
      message:
        "Couldn't handle this request. Verify the if all fields was filleds",
    });
  }

  //VALIDATING 'DISCIPLINA'

  if (!disciplinasEnum.find((item) => item == disciplina)) {
    return res.status(400).send({
      message: `You can't make this request for the 'disciplina: ${disciplina}'. The 'disciplinas' alloweds are ${disciplinasEnum}  `,
    });
  }

  // VALIDATING 'BIMESTRE'
  if (!bimestreEnum.find((item) => item == bimestre)) {
    return res.status(400).send({
      message: `You can't make this request for the 'bimestre: ${bimestre}'. The 'bimestres' alloweds are ${bimestreEnum} `,
    });
  }

  // VALIDATING 'GRADE'

  if (nota < 0 || nota > 10) {
    return res.status(400).send({
      message: `Please, insert a grade between 0 and 10`,
    });
  }

  //VALIDATIONG IF IT ALREADY EXIST
  let checkTest = await checkDB(bimestre, disciplina);

  
  if (checkTest) {
    return res.status(406).send({
      message: `${disciplina} already exist in ${bimestre} BIMESTRE`,
    });
  }

  try {
    const DisciplinaCriada = await DisciplinaModel.create({
      name: disciplina,
      bimestre: bimestre,
      grade: nota,
    });

    DisciplinaCriada.save();

    return res.status(201).json(DisciplinaCriada);
  } catch (error) {
    console.error(error);
  }
};

const checkDB = async (bimestre: string, disciplina: string) => {
  let filter = { name: disciplina, bimestre: bimestre };

  try {
    if (await DisciplinaModel.findOne(filter)) {
      return true;
    }
  } catch (error) {    
    return false;
  }

};
