import type { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonStyled, IconWrapper } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  icon?: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
}

export const Button = ({ text, icon, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <ButtonStyled $variant={variant} {...rest}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {text}
    </ButtonStyled>
  )
}
