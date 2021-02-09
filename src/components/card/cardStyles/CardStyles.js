import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  min-width: 25vh;
  min-height: 15vh;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 5px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-color: #d2d7df;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  min-width: 250px;
  min-height: 15vh;
  justify-content: center;
  width: 20vw;
`;

export const Heading = styled.h1`
  font-family: Helvetica Neue;
  font-size: 24px;
  line-height: 32px;
  color: #2a2941;
  margin-bottom: 10px;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const SubHeading = styled.h2`
  display: flex;
  font-family: Helvetica Neue;
  color: #2a2941;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 2vh;
`;

export const CardMediaContainer = styled.div`
  width: inherit;
  height: 25vh;
  min-width: inherit;
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

export const CardText = styled.p`
  display: flex;
  font-family: Helvetica Neue;
  color: #2a2941;
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  max-width: fit-content;
  margin-bottom: 2vh;
`;

export const CardFooter = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
`;

export const CardFavoriteButton = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  flex-grow: 1;
  cursor: pointer;
`;

export const MenueButton = styled.div`
  display: flex;
  flex-direction: column;
  border-color: #d2d7df;
  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 3vw;
  min-width: 35px;
  cursor: pointer;
`;

export const MenueImgContainer = styled.div`
  height: 2vh;
  display: flex;
  justify-content: center;
  width: inherit;
`;

export const MenuActionsContainer = styled.div`
  position: absolute;
  background-color: white;
  z-index: 1;
  border-color: #d2d7df;
  border-width: 1px;
  border-radius: 2px;
  width: 10vw;
  border-style: solid;
  margin-top: 5px;
  bottom: -105px;
  min-width: 100px;
`;

export const MenueAction = styled.p`
  font-family: Helvetica Neue;
  line-height: 24px;
  font-size: 16px;
  font-size: 16px;
  color: #2a2941;
  font-weight: 400;
`;

export const MenueActionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-color: #d2d7df;
  border-bottom-width: 1px;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  cursor: pointer;
  :hover {
    background-color: #1254ff;
  }

  :hover ${MenueAction} {
    color: white;
  }
`;

export const MenueContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  position: relative;
`;
