import path from 'path';
import swaggerAutogen from 'swagger-autogen';


const outputFile = './swagger-output.json'; // Here I'm pointing where is created the documentation

const endpointsFiles = [path.join("../src/server.ts", '../src/routes.ts')]; // In this array I'm poiting to the routes of our project.

const doc = {
  info: {
    version: "1.0.0",
    title: "Desafio-Matheus Fernandes Cunha",
    description: "Documentação para o backend do projeto, criado atender ao teste técnico enviado pela equipe da Monteiro Berti Psicologia, para a vaga de Desenvolvedor Júnior."
  },
  servers: [
    {
      url: `${process.env.URL}`,
      description: "Develop server"
    },
    {
      url: `${process.env.URL}`, //TODO: update after we have the deploy
      description: "Production server"
    }    
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
} // this function calls for doc update


swaggerAutogen()(outputFile, endpointsFiles, doc);
