import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 100%;
  margin: 40px;
`;

export const ProductRow = styled.div`
  display: flex;
  align-items: center;
  font-size: small;
  margin-left: 20px;
`;

export const ProductQuantity = styled.div`
  display: flex;
  margin-left: 15px;
  padding-bottom: 10px;
`;

export const ProductSort = styled.div`
  display: flex;
  margin-left: 60px;
  padding-bottom: 10px;
`;

export const ProductListCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  height: 400px;
  background-color: #e5e5ff;
  gap: 40px 0;
  margin-top: 15px;
`;
