import styled from 'styled-components';

export const StyledBuilder = styled.div`
  display: table;
  margin-top: 2%;
  background-color: #cf8f2e;
  text-align: center;
  height: 280px;
  width: 100%;
`;

export const StyledIngredientsBlock = styled.div`
  margin: 0% 31% 0% 31%;
  max-width: 25%;
  width: 100%;
  border-radius: 3px;
  padding: 2%;
  text-align: center;
  justify-content: center;
`;

export const StyledButtonLine = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 4%;
`;

export const StyledButtonLess = styled.button`
  background-color: #d39952;
  margin-right: 10%;
  border: 1px solid;
  border-color: black;
  font-size: medium;
  color: white;
  cursor: pointer;
  display: table;
  width: 100px;
  &:disabled {
    background-color: grey;
  }
`;

export const StyledButtonMore = styled.button`
  border: 1px solid;
  border-color: black;
  font-size: medium;
  color: white;
  cursor: pointer;
  display: table;
  width: 100px;
  background-color: #8f5e1e;
`;

export const StyledOrder = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-size: 1.2em;
  padding: 20px 40px;
  -webkit-box-shadow: 2px 2px 2px #966909;
  box-shadow: 2px 2px 2px #966909;
  margin-left: 41%;
  width: auto;
  &:disabled {
    background-color: grey;
    color: white;
  }
`;

export const StyledText = styled.p`
  padding-right: 10%;
  margin-left: 10%;
`;

export const CombinerBuilder = {
  StyledBuilder,
  StyledIngredientsBlock,
  StyledButtonLine,
  StyledButtonLess,
  StyledButtonMore,
  StyledOrder,
  StyledText,
};
