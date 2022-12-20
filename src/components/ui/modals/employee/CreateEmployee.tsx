import React, { useState } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../../utils/Converting';
import { PrimaryBtn } from '../../buttons/PrimaryBtn';
import TextField from '../../inputs/TextField';
import { SimpleInput } from '../../inputs/SimpleInput';
import Select from '../../inputs/Select';
import { EmployeeRequest, RoleEnum, StatusEnum } from '../../../../models/Employee';
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
    role: RoleEnum.Courier,
  });

  const eventHandler = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setUser((prevState) => ({ ...prevState, [key]: e.target.value.trim() }));
  };

  const selectHandler = (value: RoleEnum | StatusEnum) => {
    let changes = {};

    if (value in RoleEnum) {
      changes = { role: value };
    }
    setUser((prevState) => ({ ...prevState, ...changes }));
  };

  const createEmployee = async () => {
    for (const key in user) {
      if (user[key as keyof EmployeeRequest] === '') {
        setVisibility('hidden');
        return;
      }
    }
    console.log('ready to create');
    await dispatch(addEmployee(user));
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
          <Select placeholder={''} options={roleInfo.options} eventHandler={selectHandler} />
        </TextField>
      </Fields>
      <PrimaryBtn size={'medium'} onClick={() => createEmployee()}>
        Сохранить
      </PrimaryBtn>
    </Wrapper>
  );
};

export default CreateEmployee;
