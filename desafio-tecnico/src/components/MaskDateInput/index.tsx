import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  width: 295px;
  padding: 12px;
  border-radius: 4px;
  border: none;
  background: #e3e3e3;
  font-size: 16px;
`;

function formatDateToString(dateStr: string) {

  let val = dateStr.replace(/\D/g, '');
  if (val.length > 8) val = val.slice(0, 8);

  if (val.length > 4) {
    return `${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4)}`;
  } else if (val.length > 2) {
    return `${val.slice(0, 2)}/${val.slice(2)}`;
  }
  return val;
}

export const MaskedDateInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value = '', onChange, ...rest } = props;

  return (
    <StyledInput
      {...rest}
      ref={ref}
      value={formatDateToString(value)}
      onChange={onChange}
      placeholder="Data de nascimento"
      maxLength={10}
    />
  );
});
