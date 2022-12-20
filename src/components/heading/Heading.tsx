import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../utils/Converting';
import { IconBtn } from '../ui/buttons/IconBtn';
import ArrowLeft from '../../assets/icons/ArrowLeft';
import { colors } from '../../theme/colors';
import Breadcrumbs from './Breadcrumbs';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import { returnLocation } from '../../store/reducers/breadcrumb/ActionCreators';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: ${pxToRem(24)}rem;
`;

const Navigation = styled.div`
  display: flex;
  gap: ${pxToRem(36)}rem;
  align-self: stretch;
  flex: 1 1;
`;

const BtnsWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(20)}rem;
`;

interface IHeading {
  children: JSX.Element | JSX.Element[];
}

const Heading: React.FC<IHeading> = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { title } = useAppSelector((state) => state.crumbReducer);
  const [isDisabled, setDisable] = useState(true);

  useEffect(() => {
    setDisable(title === localStorage.getItem('path'));
  });

  const goBack = () => {
    dispatch(returnLocation);
    navigate(-1);
  };

  return (
    <Wrapper>
      <Navigation>
        <IconBtn
          disabled={isDisabled}
          bg={colors.white}
          bg_hover={colors.icon_hover}
          onClick={() => goBack()}
        >
          <ArrowLeft color={colors.brand} size={36} />
        </IconBtn>
        <Breadcrumbs title={title} breadcrumbs={localStorage.getItem('path') ?? ''} />
      </Navigation>
      <BtnsWrapper>{children}</BtnsWrapper>
    </Wrapper>
  );
};

export default Heading;
