import React from "react";
import styled from "styled-components";

const BoxWrapper = styled.section`
  background-color: ${(props) => props.color};
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
`;

export function Box({ label, color }) {
    return <BoxWrapper color={color}>{label}</BoxWrapper>;
}