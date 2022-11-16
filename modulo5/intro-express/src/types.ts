
//2- Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários. No seu projeto, crie uma variável de tipo para representar esse recurso.

export type User = {
  id: number,
  name: string,
  phone:string,
  email: string,
  website:string 
}

//5- No seu projeto, crie uma variável (post) de tipo para representar esse recurso.

export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string  
}