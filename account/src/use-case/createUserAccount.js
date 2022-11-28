let user = []

export function creatUserUseCase(nome, email, senha) {
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

creatUserUseCase (
  'Fernanda Oliveira', 
  'fernanda@email.com', 
  'mudarSenha'
  )

creatUserUseCase (
  'Josué Lima', 
  'josue.lima@email.com', 
  'mudarSenha')

console.log(
  'Informações do Contato:', user
  )
