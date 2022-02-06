import React, { useState } from 'react';
import { Dropdown, Input, Button } from 'semantic-ui-react'
import client from "../../Utils/CONNECTION";

const Branch = [
    {
        text: 'EE',
        value: 'EE',
    },
    {
        text: 'EC',
        value: 'EC',
    },
    {
        text: 'CS',
        value: 'CS',
    },
]

const Batch = [
    {
        text: '2018',
        value: '2018',
    },
    {
        text: '2019',
        value: '2019',
    },
    {
        text: '2020',
        value: '2020',
    },
]

const Time = [
    {
        text: 'All',
        value: 'All',
    },
    {
        text: 'Fulltime',
        value: 'Fulltime',
    },
    {
        text: 'Intern',
        value: 'Intern',
    }
]

// const Type = [
//     {
//         text: 'Core',
//         value: 'Core',
//     },
//     {
//         text: 'Non-Core',
//         value: 'Non-Core',
//     },
//     {
//         text: 'Analytics',
//         value: 'Analytics',
//     }
// ]

const Priceing = [
    {
        text: 'K',
        value: 'K',
    }, {
        text: 'LPA',
        value: 'LPA',
    },
]

function CeatePost() {

    const [name, setName] = useState('');
    const [Package, setPackage] = useState('');
    const [priceing, setPriceing] = useState(Priceing[0].value);
    const [batch, setBatch] = useState(Batch[0].value);
    const [branch, setBranch] = useState(Branch[0].value);
    const [type, setType] = useState(Time[0].value);

    const handleChange = (value, setter) => {
        setter(value);
    };



    const handleSumit = async () => {
        const data = {
            "name": name,
            "package": Package,
            "priceing": priceing,
            "batch": batch,
            "branch": branch,
            "type": type
        };

        const res = await client.post("/legends/postLegend", data);
        console.log(res)
    }
    // const [time, setTime] = useState('');

    return <div>
        <Input placeholder=' Name ' onChange={(e, { value }) => {
            handleChange(value, setName);

        }} />
        <Input placeholder='Amount ' onChange={(e, { value }) => {
            handleChange(value, setPackage);
        }} />
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Batch:
            <Dropdown
                inline
                header='Batch'
                options={Batch}
                defaultValue={Batch[0].value}
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
                options={Branch}
                defaultValue={Branch[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setBranch);
                }}
            />
        </div>
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Pricing:
            <Dropdown
                inline
                header='priceing'
                options={Priceing}
                defaultValue={Priceing[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setPriceing);
                }}
            />
        </div>
        <div style={{ margin: "1rem", fontSize: "1.5rem" }}>
            Type:
            <Dropdown
                inline
                header='Type'
                options={Time}
                defaultValue={Time[0].value}
                onChange={(e, { value }) => {
                    handleChange(value, setType);
                }}
            />
        </div>

        <Button onClick={handleSumit}>Submit</Button>
    </div >;
}

export default CeatePost;