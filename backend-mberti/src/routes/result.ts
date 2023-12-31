import { Router, Request, Response, NextFunction } from "express";
import DisciplinaModel from "../database/module/result.schema";

//CONTROLLERS
import { postController } from "../controllers/registroCreate.controller";
import { updateController } from "../controllers/registroUpdate.controller";

const router = Router();

/* GET results listing. */
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const disciplinas = await DisciplinaModel.find({});

    return res.status(200).json(disciplinas);
  } catch (error) {
    console.error("Erro na consulta ao banco de dados:", error);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

router.post("/", postController);

router.put(`/:disciplinaId`, updateController);

router.delete('/:disciplinaId', async (
  req: Request,
  res: Response,) => {

    const {disciplinaId} = req.params;  


    await DisciplinaModel.findOneAndDelete({_id: disciplinaId})

    return res.status(200).send({
      message: "Deleted successfully"
    })
  
} )

export default router;
