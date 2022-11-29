const user = []

export function createUserUseCase(nome, email, password) {
const id = users.length + 1;
const createDate = new Date().toISOString().Substring(0, 10);
    
const user = {
    id,
    name,
    email,
    password,
    createdDate,
  };

   user.push(user);
   return user;
}
