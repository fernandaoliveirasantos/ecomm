import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.DATABASE_URL);

export async function getUsersCollection(client) {
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;  
}

export async function saveAccount(account) {
    await client.connect();
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
    await client.close();
}

//** async function getUsersCollection() { // Salva a conta no mongodb (valor de retorno da função será, "por baixo dos panos")  const connection = new MongoClient(conectionURL); //faz a execução de uma função async pausar, para esperar pelo retorno da Promise , e resume a execução da função async quando o valor da Promise é resolvido.

