import { saveAccount } from '../repositories/accountRepository.js';

export function createUserUseCase(name, email, password) {
  
const createDate = new Date().toISOString().substring(0, 10);
    
const user = {
    name,
    email,
    password,
    createDate,
  };
saveAccount(user);
return user;
}
