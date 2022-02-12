import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import Cards from "../../Components/Cards/Cards";
import client from "../../Utils/CONNECTION";
import { Branches } from "../../Assets/Data/branchData";
import { Batches } from "../../Assets/Data/batchData";
import { Types } from "../../Assets/Data/TypeData";
import { Companies } from "../../Assets/Data/companydata";
import { Times } from "../../Assets/Data/timeData";
import { AddItemWrapper } from "./Legends.style";

function Legends() {
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [companies, setCompanies] = useState("");
  const [response, setResponse] = useState([]);

  useEffect(() => {
    if (batch === "All") setBatch("");
    if (branch === "All") setBranch("");
    if (type === "All") setType("");
    if (time === "All") setTime("");
    if (companies === "All") setCompanies("");

    const func = async () => {
      const query = `?batch=${batch}&branch=${branch}&type=${type}&time=${time}&company=${companies}`;
      const res = await client.get(`/legends/getLegends${query}`);
      console.log(res);
      setResponse(res.data);
    };
    func();
  }, [batch, branch, time, type, companies]);

  const handleChange = (value, setter) => {
    setter(value);
  };

  return (
    <div>
      <AddItemWrapper>
        <h2>Filters</h2>
        <Form>
          <Form.Select
            fluid
            label="Branches"
            placeholder="Branches"
            options={[
              {
                text: "All",
                value: "All",
              },
              ...Branches,
            ]}
            defaultValue={"All"}
            onChange={(e, { value }) => {
              handleChange(value, setBranch);
            }}
          />
          <Form.Select
            fluid
            label="Companies"
            placeholder="Companies"
            options={[
              {
                text: "All",
                value: "All",
              },
              ...Companies,
            ]}
            defaultValue={"All"}
            onChange={(e, { value }) => {
              handleChange(value, setCompanies);
            }}
          />
          <Form.Select
            fluid
            label="Time"
            placeholder="Time"
            options={[
              {
                text: "All",
                value: "All",
              },
              ...Times,
            ]}
            defaultValue={"All"}
            onChange={(e, { value }) => {
              handleChange(value, setTime);
            }}
          />
          <Form.Select
            fluid
            label="Type"
            placeholder="Type"
            options={[
              {
                text: "All",
                value: "All",
              },
              ...Types,
            ]}
            defaultValue={"All"}
            onChange={(e, { value }) => {
              handleChange(value, setType);
            }}
          />
          <Form.Select
            fluid
            label="Batch"
            placeholder="Batch"
            options={[
              {
                text: "All",
                value: "All",
              },
              ...Batches,
            ]}
            defaultValue={"All"}
            onChange={(e, { value }) => {
              handleChange(value, setBatch);
            }}
          />
        </Form>
      </AddItemWrapper>
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
              {" "}
              <Cards key={val._id} data={val} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Legends;
