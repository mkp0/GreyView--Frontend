import React, { useState, useContext } from "react";
import client from "../../Utils/CONNECTION";
import Cookies from "universal-cookie";
import { SetAuthContext } from "../../App";

const cookies = new Cookies();

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = useContext(SetAuthContext);

  const onChangeInput = (setI, val) => {
    setI(val);
  };

  const onSubmit = async () => {
    console.log(id, password);
    if (!id || !password) {
      alert("Fill the Form");
      return;
    }

    try {
      const data = await client.post("/auth/login", {
        id: id,
        password: password,
      });

      cookies.set("token", data.data.token, { path: "/" });
      login(true);
      console.log(data);
    } catch (err) {
      alert("Something went wrong try again!!");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <h2>
        Id :{" "}
        <input
          onChange={(e) => {
            onChangeInput(setId, e.target.value);
          }}
        />{" "}
      </h2>
      <h2>
        password :{" "}
        <input
          onChange={(e) => {
            onChangeInput(setPassword, e.target.value);
          }}
        />{" "}
      </h2>
      <h2>
        <button onClick={onSubmit}> Submit</button>
      </h2>
    </div>
  );
}

export default Login;
