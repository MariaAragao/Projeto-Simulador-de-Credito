import styled from 'styled-components';
import Icone from '@src/assets/png/icon.png';

export const HeaderContainer = styled.header`
  width:100%;
  height: 130px;
  background-color: #50504F;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`;


export const IconeWrapper = styled.div`
  width: 180px;
  height: 160px;
  background-image: url(${Icone});
  background-size: contain;
  background-repeat: no-repeat ;

`;


