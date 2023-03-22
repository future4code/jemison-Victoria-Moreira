import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./style";


export function HomePage () {
  return(
    <HomePageContainer>
      <Header/>

      <main>
        <Card
          img={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
          name={"Rick Sanchez"}
          species={"Human"}
        />
        <Card
          img={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
          name={"Morty Smith"}
          species={"Human"}
        />
        <Card
          img={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
          name={"Summer Smith"}
          species={"Human"}
        />
        <Card
          img={"https://rickandmortyapi.com/api/character/avatar/13.jpeg"}
          name={"Alien Googah"}
          species={"Alien"}
        />
      </main>
    </HomePageContainer>
  )  
}