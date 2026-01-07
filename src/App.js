import logo from './logo.svg';
import './App.css';
import './chooseAdven.js'

function App() {

  // const function1 = () => {
  //   // script src='chooseAdventure.js'
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Choose Your Own Adventure Game</h3>
        <button id='chooseadven'><b>Start Adventure App</b></button>
      </header>
    </div>

  );
}

export default App;
