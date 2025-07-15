import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.div`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 200px;
  margin: 10px;
  border-radius: 10px;
`;

export function Button({ label, bgColor, buttonHandler }) {
    return <BoxWrapper color={bgColor} onClick={buttonHandler}>{label}</BoxWrapper>;
}