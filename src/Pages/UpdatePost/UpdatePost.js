import React, { useState, useEffect, useContext } from "react";
import { Form } from "semantic-ui-react";
import client from "../../Utils/CONNECTION";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { Branches } from "../../Assets/Data/branchData";
import { Batches } from "../../Assets/Data/batchData";
import { Pricing } from "../../Assets/Data/pricingData";
import { Types } from "../../Assets/Data/TypeData";
import { Companies } from "../../Assets/Data/companydata";
import { Times } from "../../Assets/Data/timeData";
import { UpdatePostWrapper } from "./UpdatePostWrapper.style";

function UpdatePost(props) {
  let { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState("");
  const [Package, setPackage] = useState("");
  const [pricing, setPricing] = useState(Pricing[0].value);
  const [batch, setBatch] = useState(Batches[0].value);
  const [branch, setBranch] = useState(Branches[0].value);
  const [type, setType] = useState(Types[0].value);
  const [time, setTime] = useState(Times[0].value);
  const [companies, setCompanies] = useState(Companies[0].value);

  const auth = useContext(AuthContext);

  useEffect(() => {
    const func = async () => {
      const res = await client.get(`/legends/getSingleLegends/${id}`);
      const data = res.data;
      setName(data.name);
      setBranch(data.branch);
      setBatch(data.batch);
      setPackage(data.package);
      setPricing(data.pricing);
      setType(data.type);
      setTime(data.time);
      setCompanies(data.company);
      console.log(data);
    };
    func();
  }, [id]);

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

    const res = await client.put(`/legends/updateLegend/${id}`, data);
    history.push("/legends");
    console.log(res);
  };

  const handleDelete = async () => {
    await client.delete(`/Legends/deleteLegend/${id}`);
    history.push("/legends");
  };
  // const [time, setTime] = useState('');

  if (!auth) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div>
        <UpdatePostWrapper>
          <Form>
            <Form.Input
              fluid
              label="Name"
              value={name}
              placeholder="Name"
              onChange={(e, { value }) => {
                handleChange(value, setName);
              }}
            />
            <Form.Input
              fluid
              label="Amount"
              value={Package}
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
              value={pricing}
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
              value={companies}
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
              value={batch}
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
              value={branch}
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
              value={type}
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
              value={time}
              defaultValue={Times[0].value}
              onChange={(e, { value }) => {
                handleChange(value, setTime);
              }}
            />
            <Form.Button style={{ color: "green" }} onClick={handleSumit}>
              Submit
            </Form.Button>
            <Form.Button style={{ color: "red" }} onClick={handleDelete}>
              Delete
            </Form.Button>
          </Form>
        </UpdatePostWrapper>
      </div>
    );
  }
}

export default UpdatePost;
