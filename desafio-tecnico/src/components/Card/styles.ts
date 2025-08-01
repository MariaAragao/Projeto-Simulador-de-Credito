import styled from 'styled-components'
import { Button } from '@src/components/Button';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 306px;
  height:350px;
  margin-left:820px;
  margin-top:-350px;
  
`

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #50504F;
  margin-bottom: 8px;
  margin-left: 4px;;
  font-family: 'Poppins', sans-serif;
`

export const Value = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #8EDB00;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
`

export const Label = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin: 10px 0 4px;
  font-family: 'Poppins', sans-serif;

`

export const SubValue = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #bbb;
   font-family: 'Poppins', sans-serif;
`

export const ButtonComponent = styled(Button)`
  font-size: 14px;
  margin-left:45px;
  width:180px;
  color: #50504F;    
  padding:2px 4px 2px 16px;
  margin-top:44px;
  height: 48px;
  font-family: 'Poppins', sans-serif;
`;
