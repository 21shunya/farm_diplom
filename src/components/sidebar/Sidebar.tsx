import React from 'react';
import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import BasketIcon from '../../assets/icons/BasketIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import FarmIcon from '../../assets/icons/FarmIcon';
import styled from 'styled-components';
import { pxToRem } from '../../utils/Converting';
import { colors } from '../../theme/colors';
import logo from '../../assets/logo/logo_vertical.svg';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import { useAppDispatch } from '../../hooks/redux';
import { doLogout } from '../../store/reducers/ActionCreators';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${pxToRem(32)}rem ${pxToRem(16)}rem ${pxToRem(16)}rem;
  gap: ${pxToRem(64)}rem;
  border-right: 1.5px solid ${colors.grey};

  width: ${pxToRem(272)}rem;
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1;
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1;
  gap: ${pxToRem(12)}rem;
`;

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const btns = [
    { name: 'Клиенты', path: '/clients', icon: <PeopleIcon /> },
    { name: 'Заказы', path: '/orders', icon: <BasketIcon /> },
    { name: 'Сотрудники', path: '/employees', icon: <PersonIcon /> },
    { name: 'Звонки', path: '/calls', icon: <PhoneIcon /> },
    { name: 'Аптеки', path: '/farms', icon: <FarmIcon /> },
    { name: 'Логотипы', path: '/logos', icon: <FarmIcon /> },
  ];

  return (
    <Wrapper>
      <img src={logo} alt={'logo'} />
      <BtnsWrapper>
        <NavButtons>
          {btns.map((item) => (
            <Link to={item.path} key={item.path}>
              <NavButton icon={item.icon} name={item.name} />
            </Link>
          ))}
        </NavButtons>
        <NavButton
          color={colors.brand}
          onClick={() => dispatch(doLogout())}
          icon={<LogoutIcon color={colors.brand} />}
          name={'Выйти'}
        />
      </BtnsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
