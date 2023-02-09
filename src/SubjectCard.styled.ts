import styled from "styled-components";

export const SubjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 8px;
  background-color: white;
  width: 100%;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #c0c0c0;
  padding: 8px;
`;

export const SubjectCardLabel = styled.label`
  color: #737e87;
  background-color: white;
  width: 100%;
  font-weight: bold;
`;

export const SubjectCardValue = styled.span`
  color: #5c5c5c;
  background-color: white;
  width: 100%;
  text-align: right;
`;

export const SubjectCardButton = styled.button`
  font-weight: bold;
  color: #5a90da;
  background-color: transparent;
  border: none;
  width: fit-content;
  display: flex;
  margin-left: auto;
  font-size: 16px;
  padding: 0;

  cursor: pointer;

  &:disabled {
    color: #5c5c5c;
    cursor: not-allowed;
  }
`;
export const SubjectCardButtonRed = styled.button`
  font-weight: bold;
  color: red;
  background-color: transparent;
  border: none;
  width: fit-content;
  display: flex;
  margin-left: auto;
  font-size: 16px;
  padding: 0;

  cursor: pointer;

  &:disabled {
    color: #5c5c5c;
    cursor: not-allowed;
  }
`;

export const SubjectCardInput = styled.input`
  padding: 4px;
  color: #5c5c5c;
  border: 1px solid #c0c0c0;
`;
