import express, { json } from 'express';
import { router } from './routes.js';

const port = 3000;
const app = express();

app.use(json());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor de contas em execução http://localhost:${port}`)
});


  //import express, { json } from 'express';
//import { router } from './routes.js';

//const port = 3000;
//const app = express();

//app.use(json());
//app.use(router);
