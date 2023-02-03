import swaggerExpress from 'swagger-ui-express';
import yaml from 'yamljs';

import { app } from './app.js'
import client from './repositories/databaseClient.js';

//const swaggerDocs = yaml.load('./docs.yaml');
const PORT = process.env.PORT;

//app.use('/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log('Serviço de produtos em execução');

    client.authenticate()
        .then(() => { console.log('banco de dados conectado') })
        .catch(error => { console.error(error)});
});
