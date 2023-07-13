import styled from 'styled-components';

export const StyledNavbar = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  z-index: 90;
`;

export const Logo = styled.div`
  width: 56px;
  align-items: right;
  color: white;
  flex: 1;
`;

export const Image = styled.img`
  height: 35px;
  width: 45px;
  background-color: white;
  padding: 6px 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  align-items: left;
  border: none;
  height: 56px;
  background-color: #703b09;

  &:hover {
    background-color: #8f5c2c;
    color: #fff;
    border-bottom: 4px solid #2980b9;
    transform: scale(0.95);
  }
`;
