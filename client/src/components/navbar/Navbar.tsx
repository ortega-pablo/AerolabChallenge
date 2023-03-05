import React from 'react';
import {
  AeroCoins,
  Logo,
  NavbarContainer
} from '@styles/components/navbar.style';
import logo from '../../assets/aerolab-logo.svg';
import aeroIcon from '../../assets/icons/aerolabIcon-gradient.svg';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>
        <img src={logo} alt="Aerolab Logo" />
        <p>aerolab</p>
      </Logo>
      <AeroCoins>
        <div className="points">
          <img src={aeroIcon} alt="Aerolab Icon" />
          <p>10.000</p>
        </div>
        <span>
          <IoIosArrowDown size={'32px'} />
        </span>
      </AeroCoins>
    </NavbarContainer>
  );
};

export default Navbar;
