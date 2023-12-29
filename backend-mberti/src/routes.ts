import {Express, Router} from 'express';


// ROUTES
import Result from './routes/result'


const routes = (app: Express) => {
  app.use("/result", Result)

  return;
}

export default routes