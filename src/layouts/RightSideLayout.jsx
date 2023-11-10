import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AuthBcg from "../assets/main_auth_bcg.png";

const MainBackground = styled.div`
  height: calc(100vh - 80px);
  background-image: url(${AuthBcg});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 60%;

  @media (max-width: 1440px) {
    background: none;
    width: 0;
  }
`;

const AuthBackground = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1440px) {
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RightSideLayout = () => {
  return (
    <>
      <Header />
      <StyledDiv>
        <MainBackground />
        <AuthBackground>
          <Outlet />
        </AuthBackground>
      </StyledDiv>
    </>
  );
};

export default RightSideLayout;
