import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer'
// import currencyFormatter from "currency-formatter"

function App() {
  return (
    <div >
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
      <Footer/>
      {/* {currencyFormatter.format(1000000, { code: 'INR' })} */}
    </div>
  );
}

export default App;