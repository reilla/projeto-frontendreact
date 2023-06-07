import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  height: 100vh;
  width: 450px;
  background-color: black;
  border-radius: 10px;
  border: 2px solid black;
  color: #e5e5ff;
`;

export const CardProductCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  width: 400px;
  margin: 20px 0 20px;
  border-radius: 10px;
  border: 2px solid #e5e5ff;
  background-color: #e5e5ff;
  color: black;
`;

export const RemoveButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 6px;
  border: 2px solid #d9d5cc;
  background-color: #d9d5cc;
`;

export const FinishPurchaseButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 6px;
  margin-bottom: 10px;
  border: 2px solid #d9d5cc;
  background-color: #d9d5cc;
  align-self: center;
  margin: 20px;
`;
