import React from 'react';
import NavButton from './NavButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { pxToRem } from '../../utils/Converting';
import { colors } from '../../theme/colors';
import logo from '../../assets/logo/logo_vertical.svg';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import { useAppDispatch } from '../../hooks/redux';
import { doLogout } from '../../store/reducers/auth/ActionCreators';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import BasketIcon from '../../assets/icons/BasketIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import FarmIcon from '../../assets/icons/FarmIcon';

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${pxToRem(32)}rem ${pxToRem(16)}rem ${pxToRem(16)}rem;
  gap: ${pxToRem(64)}rem;
  border-right: 1.5px solid ${colors.grey};
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
  const navigate = useNavigate();
  const loc = useLocation();

  type ButtonsType = { name: string; path: string; icon: JSX.Element }[];

  const navButtons: ButtonsType = [
    {
      name: 'Клиенты',
      path: '/clients',
      get icon() {
        return <PeopleIcon color={loc.pathname === this.path ? colors.brand : ''} />;
      },
    },
    {
      name: 'Заказы',
      path: '/orders',
      get icon() {
        return <BasketIcon color={loc.pathname === this.path ? colors.brand : ''} />;
      },
    },
    {
      name: 'Сотрудники',
      path: '/employees',
      get icon() {
        return <PersonIcon color={loc.pathname === this.path ? colors.brand : ''} />;
      },
    },
    {
      name: 'Звонки',
      path: '/calls',
      get icon() {
        return <PhoneIcon color={loc.pathname === this.path ? colors.brand : ''} />;
      },
    },
    {
      name: 'Аптеки',
      path: '/farms',
      get icon() {
        return <FarmIcon color={loc.pathname === this.path ? colors.brand : ''} />;
      },
    },
    {
      name: 'Логотипы',
      path: '/logos',
      get icon() {
        return <FarmIcon color={loc.pathname === this.path ? colors.brand : ''} />;
      },
    },
  ];

  const logout = async () => {
    await dispatch(doLogout());
    navigate('/auth');
  };

  return (
    <Wrapper>
      <img src={logo} alt={'logo'} />
      <BtnsWrapper>
        <NavButtons>
          {navButtons.map((item) => (
            <Link to={item.path} key={item.path}>
              <NavButton focus={loc.pathname === item.path} icon={item.icon} name={item.name} />
            </Link>
          ))}
        </NavButtons>
        <NavButton
          focus={false}
          color={colors.brand}
          onClick={() => logout()}
          icon={<LogoutIcon color={colors.brand} />}
          name={'Выйти'}
        />
      </BtnsWrapper>
    </Wrapper>
  );
};

export default Sidebar;
