import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: auto;
  height: auto;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  break-inside: avoid-column;
  color: #fff;
  border-radius: 8px;
  aspect-ratio: 5/3;
  padding: 20px 14px;
  gap: 5px;
`;

const Card = ({ imageUrl, name, price, expense, sold, ticket, daysLeft }) => {
  return (
    <StyledCard style={{ backgroundImage: `url(${imageUrl})` }}>
      <h6 style={{ fontSize: "20px" }}>{name}</h6>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          fontSize: "18px",
          rowGap: "5px",
        }}>
        <p>{price}</p>
        <p>Yield {expense}</p>
        <p>Sold {sold}</p>
        <p>Tiket - {ticket}</p>
        <p>Days left {daysLeft}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
