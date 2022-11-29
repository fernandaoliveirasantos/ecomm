import { createUserUseCase } from "../src/use-case/createUserAccount";

const user1 = createUserUseCase (
    'Fernanda Oliveira', 
    'fernanda@email.com', 
    'mudarsenha');

const user2 = createUserUseCase (
        'Josué Lima', 
        'josuelima@email.com', 
        'mudarSenha');

console.log(user1, user2)
