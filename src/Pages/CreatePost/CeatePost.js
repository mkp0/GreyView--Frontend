import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import client from "../../Utils/CONNECTION";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { Branches } from "../../Assets/Data/branchData";
import { Batches } from "../../Assets/Data/batchData";
import { Pricing } from "../../Assets/Data/pricingData";
import { Types } from "../../Assets/Data/TypeData";
import { Companies } from "../../Assets/Data/companydata";
import { Times } from "../../Assets/Data/timeData";
import { CreatePostWrapper } from "./CreatePost.style";

function CeatePost() {
  const [name, setName] = useState("");
  const [Package, setPackage] = useState("");
  const [pricing, setPricing] = useState(Pricing[0].value);
  const [batch, setBatch] = useState(Batches[0].value);
  const [branch, setBranch] = useState(Branches[0].value);
  const [type, setType] = useState(Types[0].value);
  const [time, setTime] = useState(Times[0].value);
  const [companies, setCompanies] = useState(Companies[0].value);

  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleChange = (value, setter) => {
    setter(value);
  };

  const handleSumit = async () => {
    const data = {
      name: name,
      package: Package,
      pricing: pricing,
      batch: batch,
      branch: branch,
      type: type,
      time: time,
      company: companies,
    };

    console.log(data);

    const res = await client.post("/legends/postLegend", data);
    history.push("/legends");
    console.log(res);
  };

  if (!auth) {
    return <Redirect to="/login" />;
  } else {
    return (
      <CreatePostWrapper>
        <Form>
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            onChange={(e, { value }) => {
              handleChange(value, setName);
            }}
          />
          <Form.Input
            fluid
            label="Amount"
            placeholder="Amount"
            onChange={(e, { value }) => {
              handleChange(value, setPackage);
            }}
          />
          <Form.Select
            fluid
            label="Pricing"
            placeholder="Pricing"
            options={Pricing}
            defaultValue={Pricing[0].value}
            onChange={(e, { value }) => {
              handleChange(value, setPricing);
            }}
          />
          <Form.Select
            fluid
            label="Company"
            placeholder="Company"
            options={Companies}
            defaultValue={Companies[0].value}
            onChange={(e, { value }) => {
              handleChange(value, setCompanies);
            }}
          />
          <Form.Select
            fluid
            label="Batches"
            placeholder="Batches"
            options={Batches}
            defaultValue={Batches[0].value}
            onChange={(e, { value }) => {
              handleChange(value, setBatch);
            }}
          />
          <Form.Select
            fluid
            label="Branches"
            placeholder="Branches"
            options={Branches}
            defaultValue={Branches[0].value}
            onChange={(e, { value }) => {
              handleChange(value, setBranch);
            }}
          />
          <Form.Select
            fluid
            label="Types"
            placeholder="Types"
            options={Types}
            defaultValue={Types[0].value}
            onChange={(e, { value }) => {
              handleChange(value, setType);
            }}
          />
          <Form.Select
            fluid
            label="Time"
            placeholder="Time"
            options={Times}
            defaultValue={Times[0].value}
            onChange={(e, { value }) => {
              handleChange(value, setTime);
            }}
          />
          <Form.Button onClick={handleSumit}>Submit</Form.Button>
        </Form>
      </CreatePostWrapper>
    );
  }
}

export default CeatePost;
