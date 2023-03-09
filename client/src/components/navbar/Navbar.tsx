import React, { useEffect, useState } from 'react';
import {
  AddPoints,
  AeroCoins,
  Logo,
  NavbarContainer
} from '@styles/components/navbar.style';
import logo from '../../assets/aerolab-logo.svg';
import aeroIcon from '../../assets/icons/aerolabIcon-gradient.svg';
import { IoIosArrowDown } from 'react-icons/io';
import { getUser, userAddPoints } from '@/store/slices/user.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { RootState } from '@/store/store';
import aerolabIconWhite from '../../assets/icons/aerolabIcon-white-gradient.svg';
import aerolabIconCard from '../../assets/icons/aerolabIcon-white-black.svg';
import Spinner from '../spinner/Spinner';

const Navbar: React.FC = () => {
  const userPoints = useAppSelector(
    (state: RootState) => state.user.user.points
  );
  const userName = useAppSelector((state: RootState) => state.user.user.name);
  const userStatus = useAppSelector((state: RootState) => state.user.status)
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [add1000, setAdd1000] = useState<boolean>(false);
  const [add5000, setAdd5000] = useState<boolean>(false);
  const [add7500, setAdd7500] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSet1000 = () => {
    setAdd1000(!add1000);
    setAdd5000(false);
    setAdd7500(false);
  };

  const handleSet5000 = () => {
    setAdd1000(false);
    setAdd5000(!add5000);
    setAdd7500(false);
  };

  const handleSet7500 = () => {
    setAdd1000(false);
    setAdd5000(false);
    setAdd7500(!add7500);
  };

  const handleAddCoins = () => {
    if (add1000) {
      dispatch(
        userAddPoints({
          amount: 1000
        })
      );
      setAdd1000(!add1000);
      setIsOpen(!isOpen);
    } else if (add5000) {
      dispatch(
        userAddPoints({
          amount: 5000
        })
      );
      setAdd5000(!add5000);
      setIsOpen(!isOpen);
    } else if (add7500) {
      dispatch(
        userAddPoints({
          amount: 7500
        })
      );
      setAdd7500(!add7500);
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <NavbarContainer>
      <Logo>
        <img src={logo} alt="Aerolab Logo" />
        <p>aerolab</p>
      </Logo>
      <AeroCoins onClick={() => handleOpen()}>
        { (userStatus  === "resolved") ? (
          <>
        <div className="points">
          <img src={aeroIcon} alt="Aerolab Icon" />
          <p>{userPoints}</p>
        </div>
        <span>
          <IoIosArrowDown size={'32px'} />
        </span>
        <AddPoints
          className={isOpen ? 'open' : 'closed'}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="header">
            <p>Add Balance</p>
          </div>
          <div className="content">
            <div className="card-amount">
              <div className="aerocard">
                <div className="top">
                  <span>AeroCard</span>
                  <span>
                    <img src={aerolabIconCard} alt="Aero coin " />
                  </span>
                </div>
                <div className="bottom">
                  <span>{userName}</span>
                  <span>07/25</span>
                </div>
              </div>
              <div className="CTA-amount">
                <div className="amounts">
                  <button
                    className={add1000 ? 'selector selected' : 'selector'}
                    onClick={() => handleSet1000()}
                  >
                    <span>1000</span>
                  </button>
                  <button
                    className={add5000 ? 'selector selected' : 'selector'}
                    onClick={() => handleSet5000()}
                  >
                    <span>5000</span>
                  </button>
                  <button
                    className={add7500 ? 'selector selected' : 'selector'}
                    onClick={() => handleSet7500()}
                  >
                    <span>7500</span>
                  </button>
                </div>
                <button className="cta" onClick={() => handleAddCoins()}>
                  <span className="icon">
                    <img src={aerolabIconWhite} alt="Aero coin " />
                  </span>
                  <span className="text">Add Points</span>
                </button>
              </div>
              <div className="amount"></div>
            </div>
          </div>
        </AddPoints>
          </>
        ) : (
          <Spinner />
        )}
      </AeroCoins>
    </NavbarContainer>
  );
};

export default Navbar;
