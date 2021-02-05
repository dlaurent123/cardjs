import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  margin: 10px;
  min-width: 25vh;
  min-height: 15vh;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-color: #d2d7df;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  min-width: 25vw;
  min-height: 15vh;
  overflow: hidden;
`;

export const Heading = styled.p`
  font-family: Helvetica Neue;
  font-size: 24px;
  line-height: 32px;
  color: #2a2941;
  margin: 10px;
  text-align: left;
`;
