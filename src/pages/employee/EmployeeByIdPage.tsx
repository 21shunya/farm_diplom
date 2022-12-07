import React, { useEffect } from 'react';
import PageWrapper from '../../components/ui/pageWrapper/PageWrapper';
import Heading from '../../components/heading/Heading';
import { ContentWrapper } from '../../components/ui/pageWrapper/ContentWrapper';
import { OutlineBtn } from '../../components/ui/buttons/OutlineBtn';
import { PrimaryBtn } from '../../components/ui/buttons/PrimaryBtn';
import TextField from '../../components/ui/inputs/TextField';
import { SimpleInput } from '../../components/ui/inputs/SimpleInput';
import Select from '../../components/ui/inputs/Select';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getEmployeeByID } from '../../store/reducers/employee/ActionCreators';
import { useParams } from 'react-router-dom';
import { employeeResponseModel, roleOptions, statusOptions } from '../../models/EmployeeModel';

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
      <ContentWrapper>
        {employeeResponseModel.slice(0, 4).map((item) => (
          <TextField key={item.name} label={item.title}>
            <SimpleInput defaultValue={(employee[item.name] ?? '').toString()} />
          </TextField>
        ))}
        {[roleOptions, statusOptions].map((item) => (
          <TextField key={item.name} label={item.name}>
            <Select placeholder={''} options={item.options.slice(1)} />
          </TextField>
        ))}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default EmployeeByIdPage;