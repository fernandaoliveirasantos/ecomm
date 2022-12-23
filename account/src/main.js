import express from 'express';
import cors from 'cors';
import swaggerExpress from 'express-swagger-ui-express';
import swaggerDocs from '../api-docs.json' assert { type: 'json'};

import { router } from './routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('api-docs', swaggerExpress.serv, swaggerExpress.setup(swaggerDocs));

app.get('/health', (request, response) => {
    return response.send();
});

app.use(router);

app.listen(3000, () => {
    console.log('accounts service is running');
});
