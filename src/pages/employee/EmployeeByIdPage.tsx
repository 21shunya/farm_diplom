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
import { employeeResponseModel } from '../../models/EmployeeModel';

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
        {employeeResponseModel.slice(0, 4).map((item) => (
          <TextField key={item.name} label={item.title}>
            <SimpleInput defaultValue={(employee[item.name] ?? '').toString()} />
          </TextField>
        ))}
        {/*{[roleOptions, statusOptions].map((item) => (*/}
        {/*  <TextField key={item.name} label={item.name}>*/}
        {/*    <Select placeholder={''} options={item.options.slice(1)} />*/}
        {/*  </TextField>*/}
        {/*))}*/}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default EmployeeByIdPage;
