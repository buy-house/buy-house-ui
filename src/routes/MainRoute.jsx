import React from "react";
import MainBcg from "../assets/main_bcg.png";
import styled from "styled-components";
import StyledButton from "../styled/StyledButton";
import CardList from "../components/cards/CardList";

const MainBackground = styled.div`
  height: calc(100vh - 80px);
  background-image: linear-gradient(
      rgba(23, 34, 52, 0.6),
      rgba(23, 34, 52, 0.6)
    ),
    url(${MainBcg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MainRoute = () => {
  return (
    <>
      <MainBackground>
        <div
          style={{
            width: "70%",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: " center",
            gap: "10px",
          }}>
          <h1 style={{ fontSize: "64px", fontWeight: 700, lineHeight: "80px" }}>
            The chemical negatively charged
          </h1>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 400,
              width: "70%",
              lineHeight: "32px",
            }}>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. While the mass defect
            is
          </h3>
        </div>
        <StyledButton
          variant="outlined"
          color={"white"}
          borderColor={"white"}
          text="Get Started"
        />
      </MainBackground>
      <CardList />
    </>
  );
};

export default MainRoute;
