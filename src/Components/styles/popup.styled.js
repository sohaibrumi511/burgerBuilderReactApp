import styled from 'styled-components';

export const StyledPopup = styled.div`
  background-color: white;
  height: 300px;
  width: 30%;
  margin: auto;
  margin-top: 5%;
  padding: 3%;
  border: 2px solid black;
  position: relative;
`;

export const LowerPopup = styled.div`
  margin-top: 2%;
  text-align: center;
`;

export const StyledContinue = styled.button`
  outline: none;
  cursor: pointer;
  margin: auto;
  padding: 3% 10% 3% 10%;
  color: green;
  border: none;
  background-color: white;
  font-size: 1.5em;
  border-radius: 0.2em;

  &: hover {
    background-color: #e0dcdc;
    border-bottom: 4px solid red;
    transform: scale(0.95);
  }
`;

export const StyledCancel = styled.button`
  outline: none;
  cursor: pointer;
  margin: auto;
  padding: 3% 10% 3% 10%;
  color: red;
  border: none;
  background-color: white;
  font-size: 1.5em;
  border-radius: 0.2em;

  &: hover {
    background-color: #e0dcdc;
    border-bottom: 4px solid red;
    transform: scale(0.95);
  }
`;

export const CombinerPopup = {
  StyledPopup,
  LowerPopup,
  StyledContinue,
  StyledCancel,
};

export default CombinerPopup;
