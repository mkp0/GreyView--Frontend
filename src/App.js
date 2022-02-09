import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./Assets/Routes/Routes";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cookies from "universal-cookie";
import client from "./Utils/CONNECTION";

// import currencyFormatter from "currency-formatter"
export const AuthContext = React.createContext();
export const SetAuthContext = React.createContext();
const cookies = new Cookies();

function App() {
  const [auth, setAuth] = useState(false);

  function setAuthentication(val) {
    console.log(val);
    setAuth(val);
  }

  useEffect(() => {
    console.log(cookies.get("token"));
    const func = async () => {
      try {
        await client.get("/auth");
        setAuth(true);
      } catch (err) {
        console.log("not valid token");
      }
    };
    func();
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <SetAuthContext.Provider value={setAuthentication}>
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
          <Footer />
          {/* {currencyFormatter.format(1000000, { code: 'INR' })} */}
        </div>
      </SetAuthContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
