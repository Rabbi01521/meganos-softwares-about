import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About/About";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
