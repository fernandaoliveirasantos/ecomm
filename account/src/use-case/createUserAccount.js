import { saveAccount } from "../../repositories/accountRepository";

export function createUserUseCase(name, email, password) {
  
const createDate = new Date().toISOString().substring(0, 10);
    
const user = {
    name,
    email,
    password,
    createdDate,
  };
saveAccount(user);
}