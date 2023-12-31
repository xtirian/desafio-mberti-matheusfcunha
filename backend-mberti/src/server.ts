//SERVER CONFIG IMPORTS
import express from "express";
import path from "path";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
dotenv.config();

// SWAGGER CONFIG
import swaggerUI from "swagger-ui-express";
import swaggerFile from './documentation/swagger_output.json';
const swaggerOptions = { customCssUrl: "swagger-ui.css" };


// Starting the server

if (
  process.env.NODE_ENV == "develop" ||
  process.env.NODE_ENV == "production" //since this project don't require authentication, I'll put the same return for both cases
) {
  app.get("/", (req: Request, res: Response) => {
    /* #swagger.ignore=true*/ res.redirect("/doc");
  });

  app.use(
    "/doc",
    swaggerUI.serve,
    swaggerUI.setup(swaggerFile, swaggerOptions)
  );

  app.listen(
    process.env.PORT,
    () => `Server runing on port ${process.env.PORT}`
  );
}

Routes(app);

//TODO: EXPORT ROUTES

export default app;
