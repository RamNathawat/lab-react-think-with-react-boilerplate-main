import logo from './download-removebg-preview.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Kalvium</h1>
        <a
          className="App-link"
          href="https://kalvium.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Kalvi's Website
        </a>
      </header>
    </div>
  );
}

export default App;
