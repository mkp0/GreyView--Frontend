import React, { useState, useEffect } from 'react';
import Cards from "../../Components/Cards/Cards"
import client from "../../Utils/CONNECTION";
import { Link } from "react-router-dom"




function AllPost() {

    const [response, setResponse] = useState([]);



    useEffect(() => {
        const func = async () => {
            const res = await client.post("/legends/getLegends");

            setResponse(res.data);
        }
        func();

    }, []);




    return <div>
        {response.map((val) => {


            return <Link to={`/update/${val._id}`}><Cards key={val._id} data={val} /></Link>
        })}
    </div>
}

export default AllPost;


