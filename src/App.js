import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Application Météo</h1>
        <nav style={{paddingBottom : "1rem",paddingTop : "1rem",}}>
          <Link to="/Home">Accueil</Link> | <Link to="/Search">Rechercher</Link>| <Link to="/Favorite">Favori</Link>
        </nav>
      </header>
      <div class="bg-img"></div>
      <Outlet/>
    </div>
  );
}

export default App;
