import React, { useEffect } from 'react';
import Heading from '../components/heading/Heading';
import { PrimaryBtn } from '../components/ui/buttons/PrimaryBtn';
import PageWrapper from '../components/ui/pageWrapper/PageWrapper';
import { ContentWrapper } from '../components/ui/pageWrapper/ContentWrapper';
import { TableInputs } from '../components/ui/table/TableInputs';
import TextField from '../components/ui/inputs/TextField';
import { SimpleInput } from '../components/ui/inputs/SimpleInput';
import Select from '../components/ui/inputs/Select';
import { employeeModel, roleOptions, statusOptions } from '../models/EmployeeModel';
import { fetchEmployees } from '../store/reducers/employee/ActionCreators';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Table from '../components/ui/table/Table';

const EmployeePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { employeeList } = useAppSelector((state) => state.employeeReducer);
  console.log(employeeList);

  useEffect(() => {
    dispatch(fetchEmployees());
  });

  return (
    <PageWrapper>
      <Heading>
        <PrimaryBtn size={'medium'}>Добавить Сотрудника</PrimaryBtn>
      </Heading>

      <ContentWrapper>
        <TableInputs>
          <TextField>
            <SimpleInput placeholder={'Поиск'} />
          </TextField>
          {[roleOptions, statusOptions].map((item) => (
            <TextField key={item.name} label={item.name}>
              <Select placeholder={''} options={item.options} />
            </TextField>
          ))}
        </TableInputs>
        {employeeList.length ? (
          <Table header={employeeModel} data={employeeList} />
        ) : (
          <span>Пока нет сотрудников</span>
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default EmployeePage;
