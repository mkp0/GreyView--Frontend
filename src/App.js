import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import styled from "styled-components";

// import currencyFormatter from "currency-formatter"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <One style={{ marginTop: "4.5rem" }}>
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
        </One>
      </Router>
      <Footer />
      {/* {currencyFormatter.format(1000000, { code: 'INR' })} */}
    </div>
  );
}

export const One = styled.div`
  z-index: -1;
`;

export default App;
