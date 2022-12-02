import React, { useEffect, useState } from 'react';
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
import ModalWrapper from '../components/ui/modals/ModalWrapper';
import CreateEmployee from '../components/ui/modals/employee/CreateEmployee';

const EmployeePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { employeeList } = useAppSelector((state) => state.employeeReducer);
  const [visibility, setVisibility] = useState<'hidden' | 'visible'>('hidden');

  useEffect(() => {
    dispatch(fetchEmployees());
  }, []);

  return (
    <PageWrapper>
      <Heading>
        <PrimaryBtn size={'medium'} onClick={() => setVisibility('visible')}>
          Добавить Сотрудника
        </PrimaryBtn>
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
        <ModalWrapper
          title={'Создание Сотрудника'}
          visibility={visibility}
          setVisibility={setVisibility}
        >
          <CreateEmployee setVisibility={setVisibility} />
        </ModalWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default EmployeePage;
