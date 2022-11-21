import React from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../utils/Converting';
import { PrimaryBtn } from '../../buttons/PrimaryBtn';
import { employeeModel } from '../../../../utils/models/EmployeeModel';
import TextField from '../../inputs/TextField';
import { SimpleInput } from '../../inputs/SimpleInput';
import Select from '../../inputs/Select';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(64)}rem;
`;

const Fields = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  flex-wrap: wrap;
  gap: ${pxToRem(32)}rem;
  align-self: stretch;
`;

const CreateEmployee = () => {
  return (
    <Wrapper>
      <Fields>
        {employeeModel.slice(0, 4).map((item) => (
          <TextField key={item.name} label={item.title}>
            <SimpleInput placeholder={item.title} />
          </TextField>
        ))}
        {employeeModel.slice(4, 6).map((item) => (
          <TextField key={item.name} label={item.title}>
            <Select placeholder={item.title} options={item.options} />
          </TextField>
        ))}
      </Fields>
      <PrimaryBtn size={'medium'}>Сохранить</PrimaryBtn>
    </Wrapper>
  );
};

export default CreateEmployee;
