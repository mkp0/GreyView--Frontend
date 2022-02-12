import React, { useState, useEffect, useContext } from "react";
import Cards from "../../Components/Cards/Cards";
import client from "../../Utils/CONNECTION";
import { AuthContext } from "../../App";
import { Link, Redirect } from "react-router-dom";

function AllPost() {
  const [response, setResponse] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const func = async () => {
      const res = await client.get("/legends/getLegends");

      setResponse(res.data);
    };
    func();
  }, []);

  if (!auth) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          margin: "3%",
        }}
      >
        {response.map((val) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "2%",
              }}
            >
              <Link to={`/update/${val._id}`}>
                <Cards key={val._id} data={val} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllPost;
