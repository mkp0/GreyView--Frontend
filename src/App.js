import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {Routes.map((item) => (
            <Route
              key={item.id}
              exact={item.exact}
              path={item.path}
              component={item.component}
            ></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;