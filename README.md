# node-ignite

## Chapter 1
Aprendido conceitos de nodejs criando duas aplicações simples `finapi` e `fundamentos-nodejs`.

### Para finalizar, um desafio

Nesse desafio, você deverá criar uma aplicação para treinar o que aprendeu até agora no Node.js!

Essa será uma aplicação para gerenciar tarefas (em inglês *todos*). Será permitida a criação de um usuário com `name` e `username`, bem como fazer o CRUD de *todos*:

- Criar um novo *todo*;
- Listar todos os *todos*;
- Alterar o `title` e `deadline` de um *todo* existente;
- Marcar um *todo* como feito;
- Excluir um *todo*;

Tudo isso para cada usuário em específico (o `username` será passado pelo header). A seguir veremos com mais detalhes o que e como precisa ser feito.


## Chapter 2

### - Introdução ao typescript
Apenas um mini-usecase para introduzir o typescript

### - Rentalx

Uma aplicação de aluguéis de carro desenvolvida em todo o restante do curso. Nela contém:
- Banco de dados Postgres utilizado com docker
- Inserida a aplicação no docker
- Utilização de migrations com `typeorm`
- Leitura e upload de arquivos
- Documentação com `swagger`
- Criação, autenticação, controle de tokens de usuário via JWT
- Lógica de locação de carros
- Visto um pouco da metodologia TDD
- Visto um pouco de testes unitários e testes de integração
- Providers de datas e envio de email
- Envio de emails (Ethereal para teste e S3 da amazon em produção)
- Em um repositório privado CI/CD com Github Actions e deploy da aplicação na AWS
- `RateLimit` e `Sentry` para segurança e controle de requisições
