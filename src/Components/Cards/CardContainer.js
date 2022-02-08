import React from "react";
import styled from "styled-components";

export default function CardContainer({ children }) {
  const Container = styled.div`
    padding: 47px;
    background-color: #ffffff;
    height: 353px;
    width: 411px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    @media (max-width: 510px) {
      width: 270px;
    }
  `;

  return <Container>{children}</Container>;
}
