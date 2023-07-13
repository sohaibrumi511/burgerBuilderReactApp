import styled from 'styled-components';

export const StyledBurger = styled.div`
  background-color: white;
  text-align: center;
  height: 600px;
  margin-top: 5%;
  overflow-y: scroll;
  position: relative;
`;

export const StyledTop = styled.div`
  height: 20%;
  width: 20%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  margin: auto;
  position: relative;
`;

export const StyledSeeds1 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 30%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 180%;
    top: -50%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: -170%;
    top: -260%;
    border-radius: 40%;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }
`;

export const StyledSeeds2 = styled.div`
  width: 10%;
  height: 15%;
  position: absolute;
  background-color: white;
  left: 64%;
  top: 50%;
  border-radius: 40%;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    left: 150%;
    top: -130%;
    border-radius: 40%;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`;

export const StyledLettuce = styled.div`
  width: 22%;
  height: 5%;
  margin: auto;
  background: linear-gradient(#228c1d, #91ce50);
  border-radius: 20px;
`;

export const StyledBacon = styled.div`
  width: 20%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: auto;
`;

export const StyledCheese = styled.div`
  width: 22%;
  height: 3%;
  margin: auto;
  background: linear-gradient(#f4d004, #d6bb22);
  border-radius: 20px;
`;

export const StyledMeat = styled.div`
  width: 20%;
  height: 8%;
  background: linear-gradient(#7f3608, #702e05);
  margin: auto;
  border-radius: 15px;
`;

export const StyledBottom = styled.div`
  height: 13%;
  width: 20%;
  background: linear-gradient(#f08e4a, #e27b36);
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  margin: auto;
`;

export const CombinerBurger = {
  StyledBurger,
  StyledTop,
  StyledSeeds1,
  StyledSeeds2,
  StyledLettuce,
  StyledBacon,
  StyledCheese,
  StyledMeat,
  StyledBottom,
};

export default CombinerBurger;
