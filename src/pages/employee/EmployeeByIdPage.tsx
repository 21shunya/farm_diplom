import React, { useEffect, useState } from 'react';
import PageWrapper from '../../components/ui/pageWrapper/PageWrapper';
import Heading from '../../components/heading/Heading';
import { ContentWrapper } from '../../components/ui/pageWrapper/ContentWrapper';
import { OutlineBtn } from '../../components/ui/buttons/OutlineBtn';
import { PrimaryBtn } from '../../components/ui/buttons/PrimaryBtn';
import TextField from '../../components/ui/inputs/TextField';
import { SimpleInput } from '../../components/ui/inputs/SimpleInput';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getEmployeeByID, updateEmployee } from '../../store/reducers/employee/ActionCreators';
import { useParams } from 'react-router-dom';
import { employeeResponseModel, roleInfo, statusInfo } from '../../models/EmployeeModel';
import Select from '../../components/ui/inputs/Select';
import styled from 'styled-components';
import { pxToRem } from '../../utils/Converting';
import { EmployeeResponse, RoleEnum, StatusEnum } from '../../models/Employee';

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${pxToRem(48)}rem;
  align-content: flex-start;
`;

const EmployeeByIdPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { employee } = useAppSelector((state) => state.employeeReducer);
  const [newEmployee, setNewEmployee] = useState<EmployeeResponse>(employee);

  useEffect(() => {
    if (id) {
      dispatch(getEmployeeByID(id));
    }
  }, []);

  useEffect(() => {
    setNewEmployee(employee);
  }, [employee]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, key: keyof EmployeeResponse) => {
    setNewEmployee((prevState) => ({ ...prevState, [key]: e.target.value.trim() }));
  };

  const roleStatusSelector = (value: RoleEnum | StatusEnum) => {
    let changes = {};

    if (value in RoleEnum) {
      changes = { role: value };
    } else {
      changes = { active: value === 'active' };
    }

    setNewEmployee((prevState) => ({ ...prevState, ...changes }));
  };

  const onSaveHandler = () => {
    if (JSON.stringify(employee) !== JSON.stringify(newEmployee)) {
      console.log(newEmployee);
      dispatch(updateEmployee(newEmployee));
    } else {
      console.log('has no changes');
    }
  };

  return (
    <PageWrapper>
      <Heading>
        <OutlineBtn size={'medium'}>Удалить</OutlineBtn>
        <PrimaryBtn size={'medium'} onClick={() => onSaveHandler()}>
          Сохранить
        </PrimaryBtn>
      </Heading>
      <ContentWrapper flex_dir={'row'} flex_wrap={'wrap'} gap={42}>
        <FieldsWrapper>
          {employeeResponseModel.slice(0, 4).map((item) => (
            <TextField key={item.name} label={item.title}>
              <SimpleInput
                placeholder={'Не указано'}
                value={(newEmployee[item.name] ?? '').toString()}
                onChange={(e) => onChangeHandler(e, item.name)}
              />
            </TextField>
          ))}
          {[roleInfo, statusInfo].map((item) => (
            <TextField key={item.title} label={item.title}>
              <Select placeholder={''} options={item.options} eventHandler={roleStatusSelector} />
            </TextField>
          ))}
        </FieldsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default EmployeeByIdPage;
