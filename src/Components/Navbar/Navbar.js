import React, { useState, useEffect } from "react";
import { MenuLink, Nav, Logo, Menu, Hamburger } from "./Navbar.style";
import { Link } from "react-router-dom";
import client from "../../Utils/CONNECTION";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    client
      .get("/auth/signin")
      .then((res) => {
        setAuth(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (val) => {
    setAuth(val);
  };

  const loggedInNavbar = (
    <>
      <Link to="/create">
        {" "}
        <MenuLink>Add</MenuLink>
      </Link>
      <Link to="/allpost">
        {" "}
        <MenuLink>Update Posts</MenuLink>
      </Link>
      <Link to="/logout">
        {" "}
        <MenuLink
          onClick={() => {
            cookies.set("token", "", { path: "/" });
            setAuth(false);
          }}
        >
          Logged Out
        </MenuLink>
      </Link>
    </>
  );

  return (
    <Nav>
      <Logo>
        Grey<span>View</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link to="/">
          {" "}
          <MenuLink>Home</MenuLink>
        </Link>
        <Link to="/legends">
          {" "}
          <MenuLink>Legends</MenuLink>
        </Link>
        <Link to="/about">
          {" "}
          <MenuLink>About</MenuLink>
        </Link>
        {!auth ? (
          <MenuLink>
            <LogIn handleChange={handleChange} />
          </MenuLink>
        ) : (
          loggedInNavbar
        )}
      </Menu>
    </Nav>
  );
};

function LogIn({ handleChange }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeState = (value, setter) => {
    setter(value);
  };

  const handleSumit = async () => {
    const data = {
      id: id,
      password: password,
    };

    console.log(handleChange);

    console.log(data);

    client
      .post("/auth/login", data)
      .then((res) => {
        cookies.set("token", res.data.token, { path: "/" });
        handleChange(true);
      })
      .catch((err) => {
        console.log("Err");
      });
  };

  return (
    <div>
      <span class="login-trigger" data-target="#login" data-toggle="modal">
        Login
      </span>

      <div id="login" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <button data-dismiss="modal" class="close">
                &times;
              </button>
              <h4>Login</h4>
              <form>
                <input
                  type="text"
                  name="username"
                  class="username form-control"
                  placeholder="Admin ID"
                  onChange={(e) => {
                    console.log(e.target.value);
                    handleChangeState(e.target.value, setId);
                  }}
                />
                <input
                  type="password"
                  name="password"
                  class="password form-control"
                  placeholder="Admin PASSWORD : "
                  onChange={(e) => {
                    handleChangeState(e.target.value, setPassword);
                  }}
                />
                <input
                  class="btn login"
                  type="submit"
                  value="Login"
                  data-dismiss="modal"
                  onClick={handleSumit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
