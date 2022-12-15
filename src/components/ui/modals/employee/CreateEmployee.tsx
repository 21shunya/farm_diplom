import React, { useState } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../utils/Converting';
import { PrimaryBtn } from '../../buttons/PrimaryBtn';
import TextField from '../../inputs/TextField';
import { SimpleInput } from '../../inputs/SimpleInput';
import Select from '../../inputs/Select';
import { EmployeeRequest, Roles } from '../../../../models/Employee';
import { useAppDispatch } from '../../../../hooks/redux';
import { addEmployee } from '../../../../store/reducers/employee/ActionCreators';
import { employeeRequestModel, roleInfo } from '../../../../models/EmployeeModel';

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
    role: 'Courier',
  });

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setUser((prevState) => ({ ...prevState, [key]: e.target.value }));
  };

  const selectHandler = (value: Roles) => {
    setUser((prevState) => ({ ...prevState, role: value }));
  };

  const createEmployee = () => {
    const newUser: EmployeeRequest = {
      name: '',
      surname: '',
      patronymic: '',
      phone: '',
      role: 'Courier',
    };

    let key: keyof EmployeeRequest;

    for (key in user) {
      console.log(`${key} type: ${typeof user[key]}`);
      // newUser[key] = user[key];
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
        <TextField key={roleInfo.name} label={roleInfo.name}>
          <Select
            placeholder={''}
            options={roleInfo.options.slice(1, 4)}
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
