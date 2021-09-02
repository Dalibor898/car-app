import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AppCars from './pages/AppCars';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <h3><Link to="/">Home</Link></h3>
          <h3><Link to="/cars">Cars</Link></h3>
        </nav>
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
