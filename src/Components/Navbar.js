import React from 'react';
import { Link } from 'react-router-dom';

import { StyledNavbar, Logo, Image, Button } from './styles/navbar.styled';

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>
        <Link to={'/home'}>
          <Image alt="logo" src={require('../images/logo.png')}></Image>
        </Link>
      </Logo>
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <Button>Sign In</Button>
      </Link>
    </StyledNavbar>
  );
};

export default Navbar;
