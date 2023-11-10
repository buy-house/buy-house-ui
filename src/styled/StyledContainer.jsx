import styled from "styled-components";

const StyledContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "350px",
        width: "100%",
      }}>
      {children}
    </div>
  );
};

export default StyledContainer;
