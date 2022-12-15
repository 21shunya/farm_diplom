import React, { useEffect } from 'react';
import PageWrapper from '../../components/ui/pageWrapper/PageWrapper';
import Heading from '../../components/heading/Heading';
import { ContentWrapper } from '../../components/ui/pageWrapper/ContentWrapper';
import { OutlineBtn } from '../../components/ui/buttons/OutlineBtn';
import { PrimaryBtn } from '../../components/ui/buttons/PrimaryBtn';
import TextField from '../../components/ui/inputs/TextField';
import { SimpleInput } from '../../components/ui/inputs/SimpleInput';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getEmployeeByID } from '../../store/reducers/employee/ActionCreators';
import { useParams } from 'react-router-dom';
import { employeeResponseModel, roleInfo, statusInfo } from '../../models/EmployeeModel';
import Select from '../../components/ui/inputs/Select';
import styled from 'styled-components';
import { pxToRem } from '../../utils/Converting';

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: ${pxToRem(48)}rem;
  //align-self: stretch;
`;

const EmployeeByIdPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { employee } = useAppSelector((state) => state.employeeReducer);
  // const { user, setUser };

  useEffect(() => {
    if (id) {
      dispatch(getEmployeeByID(id));
    }
  }, []);

  return (
    <PageWrapper>
      <Heading>
        <OutlineBtn size={'medium'}>Удалить</OutlineBtn>
        <PrimaryBtn size={'medium'}>Сохранить</PrimaryBtn>
      </Heading>
      <ContentWrapper flex_dir={'row'} flex_wrap={'wrap'} gap={42}>
        <FieldsWrapper>
          {employeeResponseModel.slice(0, 4).map((item) => (
            <TextField key={item.name} label={item.title}>
              <SimpleInput defaultValue={(employee[item.name] ?? '').toString()} />
            </TextField>
          ))}
          {[roleInfo, statusInfo].map((item) => (
            <TextField key={item.name} label={item.name}>
              <Select placeholder={''} options={item.options} />
            </TextField>
          ))}
        </FieldsWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default EmployeeByIdPage;
