import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Choose Your Own Adventure Game</h3>
        <a
          className="App-link"
          id='chooseAdven'
        >
          Launch Adventure
        </a>
      </header>
      <script src="./apps/adventure/chooseAdven.js"></script>
    </div>
    
  );
}

export default App;
