import React from "react";
import styled from "styled-components";

export default function Calendar() {
  return (
    <CalendarWrap>
      <CalendarDiv></CalendarDiv>
      <CalendarDiv></CalendarDiv>
    </CalendarWrap>
  );
}

const CalendarWrap = styled.div`
  display: flex;
`;

const CalendarDiv = styled.div`
  width: 300px;
  height: 300px;

  border: 1px solid;

  margin: 0 10px;
`;
