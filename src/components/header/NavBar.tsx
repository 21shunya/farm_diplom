import React from 'react';
import styled from 'styled-components';
import { OutlineBtn } from '../ui/buttons/OutlineBtn';
import { Link, useNavigate } from 'react-router-dom';
import Tabs from '../ui/buttons/Tabs';
import { colors } from '../../theme/colors';

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 48px;
`;

const TabsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  max-height: 20px;
  text-decoration: none;
`;

interface INavBar {
  isItemPage: boolean;
}

const NavBar: React.FC<INavBar> = ({ isItemPage }) => {
  const mainTabs = [
    { name: 'Клиенты', path: '/client' },
    { name: 'Заказы', path: '/order' },
    { name: 'Сотрудники', path: '/employee' },
    { name: 'Звонки', path: '/call' },
  ];

  const navigate = useNavigate();

  return (
    <NavBarWrapper>
      <TabsWrapper>
        {isItemPage ? (
          <Tabs onClick={() => navigate(-1)} children={'Назад'} />
        ) : (
          mainTabs.map((item) => (
            <Link key={item.path} to={item.path}>
              <Tabs children={item.name} />
            </Link>
          ))
        )}
      </TabsWrapper>
      <OutlineBtn
        onClick={() => navigate('/auth')}
        size={'small'}
        bg={colors.white}
        active_bg={colors.white}
      >
        Выйти
      </OutlineBtn>
    </NavBarWrapper>
  );
};

export default NavBar;
