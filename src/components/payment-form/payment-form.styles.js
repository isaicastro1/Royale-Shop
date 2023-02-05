import styled from "styled-components";
import Button from "../button/button";

export const PaymentFormContainer = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const TestText = styled.p`
  color: gray;
  font-size: 13px;
  margin-bottom: 20px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
