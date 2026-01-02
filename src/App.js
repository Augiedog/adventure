import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          To start the Adventure Click Below
        </p>
        <a
          className="App-link"
          href='chooseadventure.js'
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch Adventure
        </a>
      </header>
    </div>
  );
}

export default App;
