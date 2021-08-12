import Home from './containers/Home';
import logo from './logo.svg';
import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bake Sales For Good</h1>
      </header>
      <Home />
    </div>
  );
}

export default App;
