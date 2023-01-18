import express from 'express';
import cors from 'cors';
import swaggerExpress from 'swagger-ui-express';
import yaml from 'yamljs';
import { router } from './routes.js';

import client from './repositories/databaseClient.js';

const swaggerDocs = yaml.load('./docs.yaml');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/health', (request, response) => {
    return response.send();
});

app.use(router);
app.use('/api-docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs));

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

app.listen(3000, () => {
    console.log('products service is running');

    client.authenticate()
      .then(() => console.log('conectando com mysql'))
      .catch(error => console.error(error.message));
    
});
