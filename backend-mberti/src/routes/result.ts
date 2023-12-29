var express = require("express");
import { Router, Request, Response, NextFunction } from "express";

const router = Router();

/* GET results listing. */
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log("resposta: ", process.env.TEST)
  res.send({
    message: "Acessed to results"
  })
});

export default router;
