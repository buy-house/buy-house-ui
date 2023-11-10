import React from "react";
import styled from "styled-components";
import StyledButton from "../styled/StyledButton";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { LOGIN_ROUTE, SIGN_UP_ROUTE } from "../app/Routes";

const StyledHeader = styled.header`
  height: 80px;
  width: 100%;
  background: #172234;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <span style={{ color: "white" }}>My logo</span>
      <div style={{ display: "flex", gap: "10px" }}>
        <StyledButton
          text="Log In"
          variant="outlined"
          to={LOGIN_ROUTE}
          component={RouterLink}
        />
        <StyledButton
          text="Sign Up"
          variant="contained"
          to={SIGN_UP_ROUTE}
          component={RouterLink}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
