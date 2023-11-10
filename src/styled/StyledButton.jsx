import React from "react";
import styled from "styled-components";

const Button = styled.a`
  border: 2px solid transparent;
  height: ${(props) => (props.size === "medium" ? "54px" : "44px")};
  width: ${(props) => (props.$fullWidth ? "100%" : "160px")};
  border-radius: 8px;
  font-size: ${(props) => (props.size === "medium" ? "20px" : "16px")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;

  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "#B29F7E"};
`;

const OutlinedButton = styled(Button)`
  border-color: ${(props) => props.borderColor || "#B29F7E"};
  color: ${(props) => props.color};
`;

const ContainedButton = styled(Button)`
  background-color: ${(props) => props.backgroundColor || "#B29F7E"};
  color: ${(props) => props.color || "#fff"};
`;

const StyledButton = ({
  variant,
  text,
  color,
  backgroundColor,
  borderColor,
  type,
  fullWidth,
  to,
  component,
}) => {
  if (variant === "outlined") {
    return (
      <OutlinedButton
        borderColor={borderColor}
        color={color}
        type={type}
        $fullWidth={fullWidth}
        href={to}
        $component={component}>
        {text}
      </OutlinedButton>
    );
  } else if (variant === "contained") {
    return (
      <ContainedButton
        backgroundColor={backgroundColor}
        color={color}
        type={type}
        $fullWidth={fullWidth}
        href={to}
        $component={component}>
        {text}
      </ContainedButton>
    );
  } else {
    return null;
  }
};

export default StyledButton;
