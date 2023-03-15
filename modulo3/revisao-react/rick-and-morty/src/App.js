
import './App.css';
import { DetailsPage } from './pages/DetailsPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <HomePage/>
      <DetailsPage/>
    </div>
  );
}

export default App;
