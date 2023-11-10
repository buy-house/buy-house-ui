import styled from "styled-components";

const Link = styled.a`
  color: #b29f7e;
  font-weight: 600;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = ({ to, component, text, style }) => {
  return (
    <Link href={to} $component={component} style={style}>
      {text}
    </Link>
  );
};

export default StyledLink;
