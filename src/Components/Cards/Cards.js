import CardContainer from "./CardContainer";
import Title from "./CardTitle";
import CardDescription from "./CardDiscription";

function Cards({ data }) {
  return (
    <div>
      <CardContainer>
        <Title name={data.name} company={data.company} />
        <p>
          {data.time === "FullTime" ? "Package" : "Stipend"} : {data.package}{" "}
          {data.pricing}
        </p>
        <CardDescription
          batch={data.batch}
          branch={data.branch}
          type={data.type}
          time={data.time}
        />
      </CardContainer>
    </div>
  );
}

export default Cards;
