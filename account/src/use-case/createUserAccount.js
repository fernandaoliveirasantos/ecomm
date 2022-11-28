let user = []

export function createUserUseCase(nome, email, senha) {
const user = {
    id: user.length + 1,
    name: nome,
    email: email,
    password: senha,
    createdDate: new Date(),
  }

   user.push(user);
   return user;
}

createUserUseCase (
  'Fernanda Oliveira', 
  'fernanda@email.com', 
  'mudarSenha'
  )

createUserUseCase (
  'Josué Lima', 
  'josue.lima@email.com', 
  'mudarSenha')

console.log(
  'Informações do Contato:', user
  )
