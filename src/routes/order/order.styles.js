import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const OrderSummary = styled.div`
  width: 90vw;
  max-width: 1100px;
  height: fit-content;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const OrderItems = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

export const OrderItem = styled.div`
  width: 60%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  border: 1px solid black;
`;

export const ItemDetails = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  width: 250px;
  overflow: hidden;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  width: 200px;
  margin-top: 40px;
  border: 1px solid black;
  border-radius: 5px;
`;
