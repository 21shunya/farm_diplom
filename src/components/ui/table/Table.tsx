import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow';
import ColorFlags from '../colorFlags/colorFlags';

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
  const header = [['Фамилия', 'Имя', 'Отчество', 'Телефон', 'Статус']];
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
      {header.map((row, idx) => (
        <TableRow key={idx} isHeader data={row} />
      ))}
      {data.map((row, idx) => (
        <TableRow isHeader={false} key={idx} data={row} />
      ))}
    </StyledTable>
  );
};

export default Table;
