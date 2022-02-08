import React, { useState } from 'react';
import { Dropdown, Input, Button,Form } from 'semantic-ui-react'
import client from "../../Utils/CONNECTION";

import { Branches } from "../../Assets/Data/branchData"
import { Batches } from "../../Assets/Data/batchData"
import { Pricing } from "../../Assets/Data/pricingData"
import { Types } from "../../Assets/Data/TypeData"
import { Companies } from "../../Assets/Data/companydata"
import { Times } from "../../Assets/Data/timeData"



function CeatePost() {

    const [name, setName] = useState('');
    const [Package, setPackage] = useState('');
    const [pricing, setPricing] = useState(Pricing[0].value);
    const [batch, setBatch] = useState(Batches[0].value);
    const [branch, setBranch] = useState(Branches[0].value);
    const [type, setType] = useState(Types[0].value);
    const [time, setTime] = useState(Times[0].value);
    const [companies, setCompanies] = useState(Companies[0].value);

    const handleChange = (value, setter) => {
        setter(value);
    };



    const handleSumit = async () => {
        const data = {
            "name": name,
            "package": Package,
            "pricing": pricing,
            "batch": batch,
            "branch": branch,
            "type": type,
            "time": time,
            "company": companies
        };

        console.log(data)

        const res = await client.post("/legends/postLegend", data);
        console.log(res)
    }

    return <div style={{padding : "2rem 1rem"}}><Form>
        
    
    <Form.Field inline>
        <label style={{margin : "0px 10px"}}>Name</label>
        <Input placeholder='Name : ' onChange={(e, { value }) => {
            handleChange(value, setName);
        }} />

        
    </Form.Field>

    <Form.Field inline>
    <label style={{margin : "0px 10px"}}>Amount : </label>
    <Input placeholder='money in K or LPA' onChange={(e, { value }) => {
            handleChange(value, setPackage);
        }} />

        <label style={{margin : "0px 10px"}}>Pricing</label>
                    <Dropdown
                        inline
                        header='Pricing'
                        options={Pricing}
                        defaultValue={Pricing[0].value}
                        onChange={(e, { value }) => {
                            handleChange(value, setPricing);
                        }}
                    />
    </Form.Field>

    <Form.Field inline>
    <label style={{margin : "0px 10px"}}>Batch : </label>
    <Dropdown
                inline
                header='Batch'
                options={Batches}
                defaultValue={Batches[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setBatch);
                }}
            />
    </Form.Field>

    <Form.Field inline>
    <label style={{margin : "0px 10px"}}>Branch : </label>
    <Dropdown
                inline
                header='Branch'
                options={Branches}
                defaultValue={Branches[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setBranch);
                }}
            />
    </Form.Field>


    <Form.Field inline>
    <label style={{margin : "0px 10px"}}>Type : </label>
    <Dropdown
                inline
                header='Type'
                options={Types}
                defaultValue={Types[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setType);
                }}
            />
    </Form.Field>

    <Form.Field inline>
    <label style={{margin : "0px 10px"}}>Time : </label>
    <Dropdown
                inline
                header='Time'
                options={Times}
                defaultValue={Times[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setTime);
                }}
            />
    </Form.Field>
       

    <Form.Field inline>
    <label style={{margin : "0px 10px"}}>company : </label>
    <Dropdown
                inline
                header='Companies'
                options={Companies}
                defaultValue={Companies[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setCompanies);
                }}
            />
    </Form.Field>
       
        

        <Button onClick={handleSumit}>Submit</Button>
   </Form> </div >;
}

export default CeatePost;