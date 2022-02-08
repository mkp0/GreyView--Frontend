import React from "react";
import styled from "styled-components";

export default function Title({ name, company }) {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 164.36px;
    margin-bottom: 11.74px;
  `;

  const Name = styled.h3`
    font-size: 25px;
    font-weight: 900;
    @media (max-width: 510px) {
      font-size: 21px;
      margin: -10px;
    }
  `;

  const Position = styled.h6`
    font-size: 15px;
    font-weight: 600;
  `;

  return (
    <Container>
      <Name>{name}</Name>
      <Position>{company}</Position>
    </Container>
  );
}
