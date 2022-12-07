import React, { useState } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../utils/Converting';
import { PrimaryBtn } from '../../buttons/PrimaryBtn';
import TextField from '../../inputs/TextField';
import { SimpleInput } from '../../inputs/SimpleInput';
import Select from '../../inputs/Select';
import { EmployeeRequest } from '../../../../models/Employee';
import { useAppDispatch } from '../../../../hooks/redux';
import { addEmployee } from '../../../../store/reducers/employee/ActionCreators';
import { employeeRequestModel, roleOptions } from '../../../../models/EmployeeModel';

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

interface ICreateEmployee {
  setVisibility: React.Dispatch<React.SetStateAction<'hidden' | 'visible'>>;
}

const CreateEmployee: React.FC<ICreateEmployee> = ({ setVisibility }) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<EmployeeRequest>({
    name: '',
    surname: '',
    patronymic: '',
    phone: '',
    role: '',
  });

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setUser((prevState) => ({ ...prevState, [key]: e.target.value }));
  };

  const selectHandler = (value: string) => {
    setUser((prevState) => ({ ...prevState, role: value }));
  };

  const createEmployee = () => {
    const newUser: EmployeeRequest = { name: '', surname: '', patronymic: '', phone: '', role: '' };
    for (const key in user) {
      newUser[key as keyof EmployeeRequest] = user[key as keyof EmployeeRequest].trim();
      if (newUser[key as keyof EmployeeRequest] === '') {
        setVisibility('hidden');
        return;
      }
    }
    dispatch(addEmployee(newUser));
    setVisibility('hidden');
  };

  return (
    <Wrapper>
      <Fields>
        {employeeRequestModel.slice(0, 4).map((item) => (
          <TextField key={item.name} label={item.title}>
            <SimpleInput
              placeholder={item.title}
              value={user[item.name]}
              onChange={(e) => eventHandler(e, item.name)}
            />
          </TextField>
        ))}
        <TextField key={roleOptions.name} label={roleOptions.name}>
          <Select
            placeholder={''}
            options={roleOptions.options.slice(1, 4)}
            eventHandler={selectHandler}
          />
        </TextField>
      </Fields>
      <PrimaryBtn size={'medium'} onClick={() => createEmployee()}>
        Сохранить
      </PrimaryBtn>
    </Wrapper>
  );
};

export default CreateEmployee;
