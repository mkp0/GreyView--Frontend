import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import Cards from "../../Components/Cards/Cards"
import client from "../../Utils/CONNECTION";
import { Branches } from "../../Assets/Data/branchData"
import { Batches } from "../../Assets/Data/batchData"
import { Types } from "../../Assets/Data/TypeData"
import { Companies } from "../../Assets/Data/companydata"
import { Times } from "../../Assets/Data/timeData"


function Legends() {

    const [batch, setBatch] = useState('');
    const [branch, setBranch] = useState('');
    const [type, setType] = useState('');
    const [time, setTime] = useState('');
    const [companies, setCompanies] = useState('');
    const [response, setResponse] = useState([]);


    useEffect(() => {



        if (batch === "All") setBatch("");
        if (branch === "All") setBranch("");
        if (type === "All") setType("");
        if (time === "All") setTime("");
        if (companies === "All") setCompanies("");

        const func = async () => {
            const data = {
                batch: batch,
                branch: branch,
                type: type,
                time: time,
                company: companies
            }
            console.log(data)
            const res = await client.post("/legends/getLegends", data);

            console.log(res)

            setResponse(res.data);
        }
        func();

    }, [batch, branch, time, type, companies]);

    const handleChange = (value, setter) => {
        setter(value);
    };

    return <div><div style={{ border: "1px solid black", padding: "1rem", display: "flex", justifyContent: "space-around" }}>
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Branch:
            <Dropdown
                inline
                header='Branch'
                options={[{
                    text: 'All',
                    value: 'All',
                }, ...Branches]}
                defaultValue={'All'}
                onChange={(e, { value }) => {
                    handleChange(value, setBranch);
                }}
            />
        </div>
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Batch:
            <Dropdown
                inline
                header='Batch'
                options={[{
                    text: 'All',
                    value: 'All',
                }, ...Batches]}
                defaultValue={'All'}
                onChange={(e, { value }) => {
                    handleChange(value, setBatch);
                }}
            />
        </div>

        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Type:
            <Dropdown
                inline
                header='Type'
                options={[{
                    text: 'All',
                    value: 'All',
                }, ...Types]}
                defaultValue={'All'}
                onChange={(e, { value }) => {
                    handleChange(value, setType);
                }}
            />
        </div>

        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Time:
            <Dropdown
                inline
                header='Time'
                options={[{
                    text: 'All',
                    value: 'All',
                }, ...Times]}
                defaultValue={'All'}
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
                options={[{
                    text: 'All',
                    value: 'All',
                }, ...Companies]}
                defaultValue={'All'}
                onChange={(e, { value }) => {
                    handleChange(value, setCompanies);
                }}
            />
        </div>


    </div>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            margin: "3%",
        }}>
            {response.map((val) => {
                return <div style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "2%",
                }}> <Cards key={val._id} data={val} /> </div>
            })}
        </div></div>;
}

export default Legends;
