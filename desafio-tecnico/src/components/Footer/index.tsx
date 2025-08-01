import { FooterContainer, FooterText } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} Simulador de Crédito</FooterText>
    </FooterContainer>
  )
}
