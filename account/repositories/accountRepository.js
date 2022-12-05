import {MongoClient} from 'mongodb'

async function databaseConnect() { // Salva a conta no mongodb (valor de retorno da função será, "por baixo dos panos)"
    const connectionURL = 'mongodb://mongouser:mongopass@account_db:27017'; 
    const connection = new MongoClient(conectionURL); //faz a execução de uma função async pausar, para esperar pelo retorno da Promise , e resume a execução da função async quando o valor da Promise é resolvido.
    await connection.connect();

    const database = connection.db('accounts');
    return database.collection('users')
}

export async function saveAccount (account) {
    const collection = await databaseConnect();
    await collection.insertOne(account);

}