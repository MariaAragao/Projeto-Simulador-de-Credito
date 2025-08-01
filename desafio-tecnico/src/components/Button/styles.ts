import styled, { css } from 'styled-components'

interface StyledProps {
  $variant: 'primary' | 'secondary' | 'danger'
}

export const ButtonStyled = styled.button<StyledProps>`
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;

  ${(props) =>
    props.$variant === 'primary' &&
    css`
      background-color: #86e000;
      color: #fff;
      border: none;

      &:hover {
        background-color: #6eb307ff;
      }
    `}

  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      background-color: transparent;
      color: #50504f;
      border: 2px solid #50504f;

      &:hover {
        background-color: #f1f1f1;
      }
    `}

  ${(props) =>
    props.$variant === 'danger' &&
    css`
      background-color: #d9534f;
      color: white;
      border: none;

      &:hover {
        background-color: #c9302c;
      }
    `}

  &:disabled {
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
    border: none;
  }
`

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`
