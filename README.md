# Klever

Aplicação HTTP Rest que faz requisições ao uma API externa da Blockbook e retonar os valores
mapeados em formato json em novos endpoints.

Índice

- [Tecnologias](#Tecnologias)
- [Instalação](#Instalação)
- [Testes](#Testes)
- [Blockbook Endpoints](#Blockbook-Endpoints)
- [Klever API Endpoints](#Klever-API-Endpoints)

# Tecnologias

- Node.js: https://nodejs.org/en/
- Express: https://expressjs.com/pt-br/
- Nodemon: https://github.com/remy/nodemon
- Cors: https://github.com/expressjs/cors
- Dotenv: https://github.com/motdotla/dotenv
- Axios: https://github.com/axios/axios
- pm2: https://github.com/Unitech/pm2
- Eslint: https://eslint.org/docs/user-guide/getting-started
- Jest: https://jestjs.io/pt-BR/docs/getting-started
- Supertest: https://github.com/visionmedia/supertest
- Sinon: https://github.com/sinonjs/sinon

# Instalação

## Normal

`git clone https://github.com/wesleymp/klever.git`

Entra na pasta do projeto `cd klever`

Utilize o comando `npm install`

Modifique o .env.example para .env na raiz do projeto e adicione as váriaveis de ambiente

_Exemplo de como deve ficar_

```
PORT=3001

BASE_URL=http://localhost:3001

```

Rode o comando `npm run dev` para rodar com o nodemon ou `npm start` para rodar com o pm2.

- pm2 gerência a aplicação e garante que se o servidor cair ou restartar a aplicação volte normalmente.

## Docker

`git clone https://github.com/wesleymp/klever.git`

Entra na pasta do projeto `cd klever`

Modifique o .env.example para .env na raiz do projeto e adicione as váriaveis de ambiente

_Exemplo de como deve ficar_

```
PORT=3001

BASE_URL=http://localhost:3001
```

Utilize o comando `docker-compose up --build`

# Testes

Caso esteja rodando a aplicação no Docker entre primeiro no container `docker exec -it klever-klever-1 bash` e rode um dos comando a baixo:

- `npm test` para rodar todos os testes
- `npm run test:unit` para rodar os testes unitários
- `npm run test:integration` para rodar os teste de integração
- `npm run test:coverage` para rodar os testes com o coverage

# Blockbook Endpoints

Endpoints utilizados para capturar os valores da resposta e retonar para a API Klever.

Example Values:

- Address: `bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r`

- Transaction: `3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab`

Address Details

- https://blockbook-bitcoin.tronwallet.me/api/v2/address/{address}

Address UTXO Details

- https://blockbook-bitcoin.tronwallet.me/api/v2/utxo/{address}

Transaction Details

- https://blockbook-bitcoin.tronwallet.me/api/v2/tx/{tx}

# Klever API Endpoints

Health [GET]: `/health`

_Resposta:_

```json
{
  "uptime": 11.3628275,
  "message": "OK",
  "date": "2022-05-09T05:28:04.821Z"
}
```

Details [GET]: `/details/bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r`

_Resposta:_

```json
{
  "address": "bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r",
  "balance": "521856040",
  "totalTx": 213322,
  "balance_": {
    "confirmed": "514729655",
    "unconfirmed": "3858318"
  },
  "total": {
    "sent": "1377453751848",
    "received": "1377975607888"
  }
}
```

Balance [GET]: `/balance/bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r`

_Resposta:_

```json
{
  "confirmed": "514729655",
  "unconfirmed": "3858318"
}
```

Send [GET]: `/send`

_Resposta:_

```json
{
  "utxos": [
    {
      "txid": "d576022dbe63f3d4c69ea425f0b8e384f63c5d415749c3aca22fea8639d2a713",
      "amount": "3758510"
    },
    {
      "txid": "2cdfbaf3343fe5c88cd99ae48320f6f0ee407a93ffbdc9dfc6a146da3454c69f",
      "amount": "99808"
    },
    {
      "txid": "1b8ddb53500a819fdc7fe522cf745364c719947801664df019e3b73b90de791c",
      "amount": "624385"
    },
    ...
  ]
}
```

Transaction [GET]: `/tx/3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab`

_Resposta:_

```json
{
  "addresses": [
    {
      "address": "36iYTpBFVZPbcyUs8pj3BtutZXzN6HPNA6",
      "value": "623579"
    },
    {
      "address": "bc1qe29ydjtwyjdmffxg4qwtd5wfwzdxvnap989glq",
      "value": "3283266"
    },
    {
      "address": "bc1qanhueax8r4cn52r38f2h727mmgg6hm3xjlwd0x",
      "value": "90311"
    },
    ...
  ],
  "bock": 675674,
  "txID": "3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab"
}
```
