import express from 'express';
import cors from 'cors';
import swaggerExpress from 'swagger-ui-express';
import swaggerDocs from '../api-docs.json' assert { type: 'json'};

import { router } from './routes.js';
import { assert } from 'console';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs));

app.get('/health', (request, response) => {
    return response.send();
});

app.use(router);

app.listen(3000, () => {
    console.log('products service is running');
});
