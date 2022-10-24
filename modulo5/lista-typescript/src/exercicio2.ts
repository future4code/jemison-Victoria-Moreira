type Bandeira = string | boolean | number | undefined |null


function verificaTipo (variavel: Bandeira){


    switch(typeof variavel){
        case('string'):
            return `A variavel ${variavel}, é uma string`
            break
        case('number'):
            return `A variavel ${variavel}, é um numero`
            break
        case('boolean'):
            return `A variavel ${variavel}, é um boolean`
            break
        default:
            return `variavel indefinida`
    }


}
console.log(verificaTipo("Labenu"))
console.log(verificaTipo(13))
console.log(verificaTipo(true))
