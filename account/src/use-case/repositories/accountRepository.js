import {MongoClient} from 'mongodb';

async function getUsersCollection() {
    const connectionURL = 'mongodb://mongouser:mongopass@account_db:27017'; 
    const connection = new MongoClient(connectionURL); 
    await connection.connect();

    const database = connection.db('accounts');
    return database.collection('users')
}

export async function saveAccount (account) {
    try {
    const collection = await getUsersCollection();
    await collection.insertOne(account);
} catch (e) {
    console.error("unsaved account =======", e.message.stack);
} finally {
    await connectionClosed()
}
}

export async function findAccountByEmail(email) {
try {
    const collection = await getUsersCollection();
    const account = await collection.findOne({ email });
    return account;
} catch (e) {
    console.error("error fetching email:=======", e.message.stack)  
}
}

async function connectionClosed() {
connection.close();
console.log("connection closed =======")
}

//async function getUsersCollection() { // Salva a conta no mongodb (valor de retorno da função será, "por baixo dos panos")

//const connection = new MongoClient(conectionURL); //faz a execução de uma função async pausar, para esperar pelo retorno da Promise , e resume a execução da função async quando o valor da Promise é resolvido.