import { CardContainer } from "./styles";

export function Card () {
  return (
    <CardContainer>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" />
        <h2>Nome</h2>
        <p>Descrição</p>
    </CardContainer>
  )
}