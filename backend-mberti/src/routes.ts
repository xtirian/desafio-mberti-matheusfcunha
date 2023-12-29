import {Express} from 'express';


// ROUTES
import Result from './routes/result'


const routes = (app: Express) => {
  app.use("/results", Result)

  return;
}

export default routes