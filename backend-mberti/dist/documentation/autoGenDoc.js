"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const outputFile = './swagger-output.json'; // Here I'm pointing where is created the documentation
const endpointsFiles = [path_1.default.join("../src/server.ts", '../src/routes.ts')]; // In this array I'm poiting to the routes of our project.
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
}; // this function calls for doc update
(0, swagger_autogen_1.default)()(outputFile, endpointsFiles, doc);
