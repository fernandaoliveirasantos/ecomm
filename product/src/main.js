import express, { json } from 'express';
import { router } from './routes.js';

const port = 3000;
const app = express();

app.use(json());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor de contas em execução http://localhost:${port}`)
  });

/*
fazendo log da mensagem: "Inigit ciando product"
Usar metodo console.log 
*console.log('Iniciando product');

Executar mensagem no terminal: dentro da pasta product\src digitar o comando <node main.js>
*/
