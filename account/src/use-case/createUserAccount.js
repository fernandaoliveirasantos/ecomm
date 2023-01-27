import { hashPassword } from '../helpers/password.js';
import { saveAccount } from '../repositories/accountRepository.js';


export async function createUserUseCase(name, email, password) {

    const accountAlreadyExists = await existsAccountByEmail(email);
    if(accountAlreadyExists) {
        console.error('Essa conta já existe', email);
        throw new Error('Essa conta já existe');
    }

    const createdDate = new Date().toISOString().substring(0, 10);
    const hashedPassword = await hashPassword(password);
    const user = {
        name, 
        email,
        password: hashedPassword,
        createdDate
    };

    await saveAccount(user);
    return user;
}