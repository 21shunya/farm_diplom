import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme/colors';
import img from '../assets/logo/logo_red.svg';
import SendCode from '../components/auth/SendCode';
import SendPhone from '../components/auth/SendPhone';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;

  width: 500px;
  height: 550px;

  background: ${colors.white};
  box-shadow: 0 2px 40px rgba(80, 80, 80, 0.45);
  border-radius: 16px;
`;

const AuthPage: React.FC = () => {
  const [hasPhone, setHasPhone] = useState(false);
  return (
    <Wrapper>
      <img src={img} alt={''} />
      {!hasPhone ? <SendPhone setHasPhone={setHasPhone} /> : <SendCode setHasPhone={setHasPhone} />}
    </Wrapper>
  );
};

export default AuthPage;
