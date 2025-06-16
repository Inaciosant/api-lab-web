# API Concessionária

Este projeto é uma API REST para gerenciamento de concessionárias, clientes, veículos e ordens de serviço.

## Como rodar o projeto

1. **Instale as dependências:**

```bash
npm install
```

2. **Inicie o servidor:**

Você pode rodar com Node.js:

```bash
node server.js
```

Ou, se preferir usar o Nodemon para recarregar automaticamente ao salvar arquivos:

```bash
nodemon server.js
```

O servidor irá rodar por padrão na porta 3000.

## Documentação das rotas

A documentação completa da API está disponível em:

```
http://localhost:3000/api-docs
```

Nessa página você encontra todos os endpoints, métodos, parâmetros obrigatórios e exemplos de requisição e resposta.

## Endpoints principais

- **/clientes**: Gerenciamento de clientes
- **/concessionaria**: Gerenciamento de concessionárias
- **/veiculos**: Gerenciamento de veículos
- **/ordens**: Gerenciamento de ordens de serviço

Todos os detalhes de cada rota, parâmetros e exemplos estão descritos na documentação Swagger em `/api-docs`.

---

