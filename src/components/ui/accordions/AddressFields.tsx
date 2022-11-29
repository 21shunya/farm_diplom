import styled from 'styled-components';
import { pxToRem } from '../../../utils/Converting';

import React from 'react';
import TextField from '../inputs/TextField';
import { SimpleInput } from '../inputs/SimpleInput';
import { Textarea } from '../inputs/Textarea';

const FieldsWrapper = styled.div`
  display: flex;
  gap: ${pxToRem(48)}rem;
  flex-wrap: wrap;
`;

const AddressFields = () => {
  const fields = [
    { label: 'Регион', value: 'Дагестан', disabled: true },
    { label: 'Город', value: '', disabled: false },
    { label: 'Улица', value: '', disabled: false },
    { label: 'Дом', value: '', disabled: false },
    { label: 'Подъезд', value: '', disabled: false },
    { label: 'Этаж', value: '', disabled: false },
    { label: 'Квартира', value: '', disabled: false },
  ];
  return (
    <FieldsWrapper>
      {fields.map((item) => (
        <TextField key={item.label} label={item.label}>
          <SimpleInput placeholder={item.value} disabled={item.disabled} />
        </TextField>
      ))}
      <TextField label={'Комментарий'}>
        <Textarea disabled />
      </TextField>
    </FieldsWrapper>
  );
};

export default AddressFields;
