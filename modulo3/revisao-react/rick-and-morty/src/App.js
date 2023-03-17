import { GlobalStyle } from './GlobalStyle';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <HomePage/>
      {/* <DetailsPage/> */}
    </div>
  );
}

export default App;
