# Dessafio Desenvolvedor Jr.

Documentação do projeto criado para atender ao teste técnico enviado pela equipe da Monteiro Berti Psicologia, para a vaga de Desenvolvedor Júnior.

## Conteúdo
- [Backend](#backend)
  - Tecnologias usadas
  - Inicializando o projeto
  - Variaveis de ambiente  
- [Frontend](#frontend)
  - Tecnologias usadas
  - Inicializando o projeto
- Considerações

## Backend

O projeto foi construído utilizando o Node com Typescript e o Framework Express.

Neste projeto você poderá adicionar as disciplinas e notas em cada bimestre, respeitando o número de uma disciplina por bimestre, nota de zero a 10 e podendo adicionar apenas as disciplinas já programadas

### Tecnologias usadas

- NodeJS
- ExpressJS - NodeJS Framework
- Swagger - Gerador automático de documentação
- MongoDB - Banco de Dados Não-relacional
- Mongoose - Biblioteca para manipulação do MongoDB no NodeJS

### Links
Repositório: [Backend - Repositorio GitHub](https://github.com/xtirian/desafio-mberti-matheusfcunha/tree/main/backend-mberti)
Deploy: [Backend - Teste Tecnico](https://backend-testetecnico.onrender.com)

### Inicializando o projeto 

Para inicializar o projeto, tenha em mente que ele foi construído na porta 8080. Verifique se a sua está livre para uso, ou altere-a no projeto se necessário.

Após as inicializações necessárias, prossiga com:
```bash
yarn install

// OU

npm install
```

Para iniciar
```bash
yarn dev

// OU

npm run dev
```

## Frontend
O Frontend foi construído utilizando o NextJS com Typescript

Neste projeto, foram consideradas as regras de negócio do backend, ainda assim foram garantidas que as regras seriam respeitadas tanto no backend quanto no frontend. Para garantir a melhor acessibilidade, todos os itens interagíveis foram tageados com title e aria-label.

A adicição da nota é feita a partir do botão lançar nota
A alteração da nota é feita clicando 2x na nota
Para deletar a nota, basta clicar na lixeira.


### Tecnologias usadas

- React
- NextJS - React Framework
- SASS/SCSS - CSS preprocessor
- Axios - Promise-based HTTP Client for node.js

### Links
Repositório: [Backend - Repositorio GitHub](https://github.com/xtirian/desafio-mberti-matheusfcunha/tree/main/backend-mberti)
Deploy: [Backend - Teste Tecnico](https://backend-testetecnico.onrender.com)

### Inicializando o projeto

```bash
yarn install

// OU

npm install
```

Para iniciar
```bash
yarn dev

// OU

npm run dev
```

## Considerações

Acredito que poderia fazer alguns mais ajustes no container pra limitar tamanhos, para ficar mais agradável aos olhos e melhorar a acessibilidade, tirando isto creio que esta aplicação está fiel ao resultado solicitado.

Caso queira dar uma olhada em outros trabalhos, estes são meus últimos trabalhos e por fim o meu pórtifolio:
- [LP - Pré-venda teclado](https://typemaster-keyboard-landing-page.vercel.app/) - aplicação front-end
- [Github user app](https://github-user-search-pi-fawn.vercel.app/) - aplicação Front-end
- [Buscador de CEP](https://buscador-cep-frontend.vercel.app/)- aplicação Full-stack
- [Portifolio](https://xtirian-portfolio.vercel.app/) - Aplicação Front-end
