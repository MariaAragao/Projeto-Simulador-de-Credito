import styled from 'styled-components'
import { Button } from '@src/components/Button';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  margin-left:420px;
  margin-top:80px;

  .input {
    width:295px;
    padding: 12px;
    border-radius: 4px;
    border: none;
    background: #e3e3e3;
    font-size: 16px;
    color: #333;
    font-family: 'Poppins', sans-serif;
  }

  .calendar {
    font-family: sans-serif;
    border-radius: 8px;
    overflow: hidden;
 }
`

export const InputStyled = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: none;
  background: #e3e3e3;
  font-size: 16px;
  color: #333;

`

export const SelectStyled = styled.select`
  width: 295px;
  padding: 12px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  color: #a8a5a5ff;
  height: 48px;
  background-color: #e3e3e3;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  /* Remove seta padrão */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: flex;
  align-items: center;

  padding-right: 40px;

  /* Adiciona seta customizada */
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666' stroke-width='2'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 10px 7px;

  /* Quando o select estiver com valor vazio ou inválido */
  &:invalid {
    color: #9f9f9dff;
  }

  /* Quando selecionar uma opção válida */
  &:valid {
    color: black;
  }
`;


export const ButtonComponent = styled(Button)`
  font-weight: bold;
  font-size: 16px;
  margin-left:65px;
  width:150px;
  color: #50504F;    
  padding:12px 12px 12px 45px;
`;


export const ButtonDelete = styled(Button)`
  font-weight: bold;
  font-size: 16px;
  margin-left:65px;
  width:150px;
  color: #50504F;    
  padding:12px 4px 12px 12px;
  margin-top: -16px;
`;
