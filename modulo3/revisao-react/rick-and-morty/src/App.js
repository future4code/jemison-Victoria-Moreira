import { results } from './data/data';
import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { HomePage } from './pages/HomePage/HomePage';


function App() {
  
  return (
    <div className="App">
      <GlobalStyle/>
      <HomePage results={results}/>
      {/* <DetailsPage/> */}
    </div>
  );
}

export default App;
