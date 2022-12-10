import React from "react";
import styled from "styled-components";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";

export default function DetailMain() {
  return (
    <DetailDiv>
      <MainLeft />
      <MainRight />
    </DetailDiv>
  );
}

const DetailDiv = styled.div`
  margin: 0 95px;
  padding: 0 80px;

  display: flex;
  align-items: stretch;
`;
