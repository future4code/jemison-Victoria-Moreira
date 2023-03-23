import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { HomePageContainer } from "./style";


export function HomePage (props) {

  const { results } = props

  const renderList = results.map( character => {
    return (
        <Card
          img={character.image}
          name={character.name}
          species={character.species}
        />
    )
  })

  return(
    <HomePageContainer>
      <Header/>

      <main>
        {renderList}
      </main>
    </HomePageContainer>
  )  
}