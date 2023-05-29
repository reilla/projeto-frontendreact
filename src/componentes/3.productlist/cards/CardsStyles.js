import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 410px;
  border-radius: 10px;
  border: 2px solid black;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const BuyButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 6px;
  margin-bottom: 10px;
  border: 2px solid #d9d5cc;
  background-color: #d9d5cc;
`;
