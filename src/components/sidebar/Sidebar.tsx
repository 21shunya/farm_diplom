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
import { mainRoutes, pathEnum } from '../../routes';
import PeopleIcon from '../../assets/icons/PeopleIcon';
import PersonIcon from '../../assets/icons/PersonIcon';
import BasketIcon from '../../assets/icons/BasketIcon';
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
  const location = useLocation();

  const icons = {
    [pathEnum.employees as string]: (
      <PersonIcon color={location.pathname.includes(pathEnum.employees) ? colors.brand : ''} />
    ),
    [pathEnum.clients]: (
      <PeopleIcon color={location.pathname.includes(pathEnum.clients) ? colors.brand : ''} />
    ),
    [pathEnum.orders]: (
      <BasketIcon color={location.pathname.includes(pathEnum.orders) ? colors.brand : ''} />
    ),
    [pathEnum.calls]: (
      <PhoneIcon color={location.pathname.includes(pathEnum.calls) ? colors.brand : ''} />
    ),
    [pathEnum.pharmacies]: (
      <FarmIcon color={location.pathname.includes(pathEnum.pharmacies) ? colors.brand : ''} />
    ),
    [pathEnum.logos]: (
      <FarmIcon color={location.pathname.includes(pathEnum.logos) ? colors.brand : ''} />
    ),
  };

  const logout = async () => {
    await dispatch(doLogout());
    navigate('/auth');
  };

  return (
    <Wrapper>
      <img src={logo} alt={'logo'} />
      <BtnsWrapper>
        <NavButtons>
          {mainRoutes.map(
            (item) =>
              (item.path.match(/\//g) || []).length === 1 && (
                <Link to={item.path} key={item.path}>
                  <NavButton
                    focus={location.pathname.includes(item.path)}
                    icon={icons[item.path]}
                    name={item.name}
                  />
                </Link>
              ),
          )}
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
