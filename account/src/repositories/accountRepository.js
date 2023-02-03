import { MongoClient } from "mongodb";

export const client = new MongoClient(process.env.DATABASE_URL);
await client.connect()

export async function getUsersCollection(client) {
    const db = client.db('accounts');
    const usersCollection = db.collection('users');
    return usersCollection;  
}

export async function saveAccount(account) {
    const usersCollection = await getUsersCollection(client);
    await usersCollection.insertOne(account);
}

export async function findUserByEmail(email) {
    const usersCollection = await getUsersCollection(client);
    const user = await usersCollection.findOne({ email });
    return user;  
}

export async function existsByEmail(email) {
    const possibleUser = await findUserByEmail(email);
    return !!possibleUser;
}
