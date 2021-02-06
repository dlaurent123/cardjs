import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  /* margin: 20px; */
  min-width: 25vh;
  min-height: 15vh;
  flex-direction: column;
  padding: 20px;
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
  justify-content: center;
`;

export const Heading = styled.p`
  font-family: Helvetica Neue;
  font-size: 24px;
  line-height: 32px;
  color: #2a2941;
  margin-bottom: 10px;
  text-align: left;
`;

export const SubHeading = styled.h5`
  display: flex;
  font-family: Helvetica Neue;
  color: #2a2941;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
`;

export const CardMediaContainer = styled.div`
  width: 25vw;
  height: 25vh;
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CardVideo = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
