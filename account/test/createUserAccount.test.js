import { createUserUseCase } from '../../src/use-case/createUserAccount.js';

const user1 = await createUserUseCase('Fernanda', 'fernanda@example.com', 'mudarsenha123');
const user2 = await createUserUseCase('Josué', 'josue@example.com', 'senha123');

console.log(user1, user2);
