import { Router, Request, Response, NextFunction } from "express";
import DisciplinaModel from "../database/module/result.schema";
import { postController } from "../controllers/registroController";

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

router.put(
  `/:id`,
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default router;
