import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;

export const Layout = styled.div`
  color: black;
  padding: 2em;
  display: grid;
  text-align: center;
  float: left;
  background-color: black;
  font-size: 2rem;
  align-items: center;
  color: white;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const LayoutImg = styled.img`
  float: left;
  width: 100%;
  max-height: 100vh;
`;
export const Paragraph = styled.p`
  padding: 2em;
`;
