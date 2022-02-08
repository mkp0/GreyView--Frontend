import React from "react";
import styled from "styled-components";

export default function Description({ batch, branch, type, time }) {
  const Description = styled.p`
    font-weight: 100;
    font-size: 15px;
    text-align: center;
  `;

  return (
    <div>
      <Description>Batch : {batch}</Description>
      <Description>Branch : {branch}</Description>
      <Description>Type : {type}</Description>
      <Description>Time : {time}</Description>
    </div>
  );
}
