
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './Components/Team/Team';

function App() {
  return (
    <div className="App">
              <Router>
                <Switch>          
                  <Route exact path="/">
                    <Home/>
                  </Route>
                    <Route path="/Team/:idTeam">
                      <Team/>
                    </Route>
                  <Route path="/Home">
                    <Home/>
                  </Route>
                </Switch>      
                
            </Router>
    </div>

  );
}

export default App;
