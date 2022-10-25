//Considerando o array de usuários abaixo, crie uma função que receba este array como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

// [
// 	{name: "Rogério", email: "roger@email.com", role: ROLES.USER},
// 	{name: "Ademir", email: "ademir@email.com", role: ROLES.ADMIN},
// 	{name: "Aline", email: "aline@email.com", role: ROLES.USER},
// 	{name: "Jéssica", email: "jessica@email.com", role: ROLES.USER},  
// 	{name: "Adilson", email: "adilson@email.com", role: ROLES.USER},  
// 	{name: "Carina", email: "carina@email.com", role: ROLES.ADMIN}      
// ] 

enum ROLES {
  USER = 'user',
  ADMIN = 'admin'
}

type User = {
  name: string,
  email: string,
  role: ROLES
}

const listaDeUsuarios: User[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLES.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLES.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLES.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLES.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLES.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLES.ADMIN}      
] 

function filtrarAdminEmail (lista:Array<User>){
  const filtrarAdmin = lista.filter((usuario)=> {
    if(usuario.role === "admin"){
      return usuario.email
    }
  })
  const mapeamentoAdmin = filtrarAdmin.map(userEmail => userEmail.email)

  return mapeamentoAdmin
}

console.log(filtrarAdminEmail(listaDeUsuarios))