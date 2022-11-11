import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';
import ColorFlags from '../colorFlags/colorFlags';
import LastRow from './LastRow';
import HeaderRow from './HeaderRow';

const StyledTable = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 2px solid #dddddd;
  border-radius: 10px;
`;

const Table: React.FC = () => {
  const header = ['Фамилия', 'Имя', 'Отчество', 'Телефон', 'Статус'];
  const data = [
    [
      'Иванов',
      'Иван',
      'Иванович',
      '89877773334545',
      <ColorFlags type={'status'} name={'active'} />,
    ],
    [
      'Иванов',
      'Иван',
      'Иванович',
      '89877773334545',
      <ColorFlags type={'status'} name={'active'} />,
    ],
    ['Иванов', 'Иван', '', '89877773334545', <ColorFlags type={'status'} name={'inactive'} />],
    [
      'Иванов',
      'Иван',
      'Иванович',
      '89877773334545',
      <ColorFlags type={'status'} name={'active'} />,
    ],
    [
      'Иванов',
      'Иван',
      'Иванович',
      '89877773334545',
      <ColorFlags type={'status'} name={'active'} />,
    ],
    ['Иванов', 'Иван', '', '89877773334545', <ColorFlags type={'status'} name={'inactive'} />],
  ];
  return (
    <StyledTable>
      <HeaderRow data={header} />
      {data.map((row, idx) => (
        <TableRow key={idx} data={row} />
      ))}
      <LastRow />
    </StyledTable>
  );
};

export default Table;
