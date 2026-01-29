import logo from './logo.svg';
import './App.css';
import './chooseAdven.js'
import Page from './componant/page.js'


function App() {
  // const function1 = () => {
  //   // script src='chooseAdventure.js'
  // }
  let startButton = [<button id='chooseAdven'><b>Start Adventure App</b></button>]
  let button2 = [<button ></button>]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Choose Your Own Adventure Game</h3>
        {startButton}
        {Page}
      </header>
    </div>

  );
}

export default App;
