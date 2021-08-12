import Home from './containers/Home';
import AddEditDeal from './containers/AddEditDeal';
import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bake Sales For Good</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/add-edit/:id">
            <AddEditDeal />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
