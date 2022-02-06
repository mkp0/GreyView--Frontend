import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import Cards from "../../Components/Cards/Cards"
import client from "../../Utils/CONNECTION";


const Branch = [
    {
        text: 'All',
        value: 'All',
    },
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
        text: 'All',
        value: 'All',
    },
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

const Type = [
    {
        text: 'All',
        value: 'All',
    },
    {
        text: 'Core',
        value: 'Core',
    },
    {
        text: 'Non-Core',
        value: 'Non-Core',
    },
    {
        text: 'Analytics',
        value: 'Analytics',
    }
]

function Legends() {

    const [batch, setBatch] = useState('');
    const [branch, setBranch] = useState('');
    const [type, setType] = useState('');
    const [time, setTime] = useState('');
    const [response, setResponse] = useState([]);

    useEffect(async () => {

        if (batch === "All") setBatch("");
        if (branch === "All") setBranch("");
        if (type === "All") setType("");
        if (time === "All") setTime("");

        const data = {
            batch: batch,
            branch: branch,
            type: time,
            time: type
        }
        const res = await client.post("/legends/getLegends", data);

        console.log(res)

        setResponse(res.data);
    }, [batch, branch, time]);

    const handleChange = (value, setter) => {
        setter(value);
    };

    return <div><div style={{ border: "1px solid black", padding: "1rem", display: "flex", justifyContent: "space-around" }}>
        <Dropdown
            inline
            header='Batch'
            options={Batch}
            defaultValue={Batch[0].value}
            onChange={(e, { value }) => {
                handleChange(value, setBatch);
            }}
        />
        <Dropdown
            inline
            header='Branch'
            options={Branch}
            defaultValue={Branch[0].value}
            onChange={(e, { value }) => {
                handleChange(value, setBranch);
            }}
        />
        <Dropdown
            inline
            header='Time'
            options={Time}
            defaultValue={Time[0].value}
            onChange={(e, { value }) => {
                handleChange(value, setTime);
            }}
        />
        <Dropdown
            inline
            header='Type'
            options={Type}
            defaultValue={Type[0].value}
            onChange={(e, { value }) => {
                handleChange(value, setType);
            }}
        />


    </div>
        <div>
            {response.map((val) => {
                return <Cards key={val._id} data={val} />
            })}
        </div></div>;
}

export default Legends;
