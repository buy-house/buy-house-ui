import React from "react";
import Cards from "./Cards";
import Card from "./Card";
import styled from "styled-components";

const StyledCardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  gap: 20px;
  width: 100%;
`;

const CardList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 80px",
      }}>
      <h4
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          color: "#B29F7E",
        }}>
        Open Deals
      </h4>
      <StyledCardListContainer>
        {Cards.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imgUrl}
            name={card.name}
            price={card.price}
            expense={card.expense}
            sold={card.sold}
            ticket={card.ticket}
            daysLeft={card.daysLeft}
          />
        ))}
      </StyledCardListContainer>
    </div>
  );
};

export default CardList;
