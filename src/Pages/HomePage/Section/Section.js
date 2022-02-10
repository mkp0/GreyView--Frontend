import React from "react";
import { Layout, LayoutWrapper, LayoutImg, Paragraph } from "./Section.style";
import img1 from "../../../Assets/Images/Luffy.jpg";

function Section() {
  return (
    <LayoutWrapper>
      <LayoutImg src={img1} />
      <Layout className="box">
        <Paragraph style={{ fontFamily: '"Redressed", cursive' }}>
          When do you think people die? When they are shot through the heart by
          the bullet of a pistol? - No... It's when… they are forgotten!!!
        </Paragraph>
      </Layout>
    </LayoutWrapper>
  );
}
export default Section;
