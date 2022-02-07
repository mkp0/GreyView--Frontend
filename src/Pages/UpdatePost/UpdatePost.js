import React, { useState, useEffect } from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react'
import client from "../../Utils/CONNECTION";
import { useParams } from 'react-router-dom'

import { Branches } from "../../Assets/Data/branchData"
import { Batches } from "../../Assets/Data/batchData"
import { Pricing } from "../../Assets/Data/pricingData"
import { Types } from "../../Assets/Data/TypeData"
import { Companies } from "../../Assets/Data/companydata"
import { Times } from "../../Assets/Data/timeData"



function UpdatePost(props) {

    let { id } = useParams();

    const [name, setName] = useState('');
    const [Package, setPackage] = useState('');
    const [pricing, setPricing] = useState(Pricing[0].value);
    const [batch, setBatch] = useState(Batches[0].value);
    const [branch, setBranch] = useState(Branches[0].value);
    const [type, setType] = useState(Types[0].value);
    const [time, setTime] = useState(Times[0].value);
    const [companies, setCompanies] = useState(Companies[0].value);


    useEffect(() => {
        const func = async () => {
            const res = await client.get(`/legends/getSingleLegends/${id}`)
            const data = res.data;
            setName(data.name)
            setBranch(data.branch)
            setBatch(data.batch)
            setPackage(data.package)
            setPricing(data.pricing)
            setType(data.type)
            setTime(data.time)
            setCompanies(data.company)
            console.log(data)
        }
        func();
    }, [id])

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

        const res = await client.put(`/legends/updateLegend/${id}`, data);
        console.log(res)
    }

    const handleDelete = async () => {
        await client.delete(`/Legends/deleteLegend/${id}`)
    }
    // const [time, setTime] = useState('');

    return <div>
        <Input placeholder=' Name ' value={name} onChange={(e, { value }) => {
            handleChange(value, setName);

        }} />
        <Input placeholder='Amount ' value={Package} onChange={(e, { value }) => {
            handleChange(value, setPackage);
        }} />
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Batch:
            <Dropdown
                inline
                header='Batch'
                options={Batches}
                defaultValue={Batches[0].value}
                value={batch}
                onChange={(e, { value }) => {
                    handleChange(value, setBatch);
                }}
            />
        </div>

        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Branch:
            <Dropdown
                inline
                header='Branch'
                value={branch}
                options={Branches}
                defaultValue={Branches[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setBranch);
                }}
            />
        </div>
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Pricing:
            <Dropdown
                inline
                header='Pricing'
                options={Pricing}
                value={pricing}
                defaultValue={Pricing[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setPricing);
                }}
            />
        </div>
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Type:
            <Dropdown
                inline
                header='Type'
                value={type}
                options={Types}
                defaultValue={Types[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setType);
                }}
            />
        </div>

        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Type:
            <Dropdown
                inline
                header='Time'
                value={time}
                options={Times}
                defaultValue={Times[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setTime);
                }}
            />
        </div>

        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            company:
            <Dropdown
                inline
                header='Companies'
                value={companies}
                options={Companies}
                defaultValue={Companies[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setCompanies);
                }}
            />
        </div>

        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleSumit}>Submit</Button>
    </div >;
}

export default UpdatePost;

