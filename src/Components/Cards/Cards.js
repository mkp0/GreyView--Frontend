import { Card } from 'antd';


function Cards({ data }) {


    return <div>
        <Card title={data.name} extra={<a href="https://greyview.herokuapp.com/">More</a>} style={{ width: 300 }}>
            <p>stipend : {data.package}</p>
            <p>branch : {data.branch}</p>
            <p>batch : {data.batch}</p>
            <p>type : {data.Type}</p>
        </Card>
    </div>;
}

export default Cards;
