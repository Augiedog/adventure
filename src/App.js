import logo from './logo.svg';
import './App.css';

function App() {

  const story  = () => {
    // script src='chooseAdventure.js'
    return (
      <>
      <h3>Choose Your Own Adventure Game</h3>
					<button id="chooseAdven" class="btn btn-default smoothScroll"><b>Start Adventure App</b>
						<img src="./images/dragon.jpg" alt="large dragon shadow" style="width: 60%; height: 60%"></img>
					</button>					
					<p>What will your ending be? As a kid I loved the books so this has been a little side project.
						It's coded as one if-then-else function. Yeah it's a nightmare to maintain, but I keep adding
						new endings. Perhaps one day it will be something more. For now, have some fun!</p>
            <script src="./apps/adventure/chooseAdven.js"></script>
      </>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Choose Your Own Adventure Game</h3>
        <button id="chooseAdven" class="btn btn-default smoothScroll"><b>Start Adventure App</b>
						<img src="./images/dragon.jpg" alt="large dragon shadow" style="width: 60%; height: 60%"></img>
					</button>					
					<p>What will your ending be? As a kid I loved the books so this has been a little side project.
						It's coded as one if-then-else function. Yeah it's a nightmare to maintain, but I keep adding
						new endings. Perhaps one day it will be something more. For now, have some fun!</p>
            <script src="./apps/adventure/chooseAdven.js"></script>
      </header>
    </div>
    
  );
}

export default App;
