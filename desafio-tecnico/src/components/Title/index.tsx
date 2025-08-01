import { TitleContainer } from './styles'

interface TitleProps {
  text: string
}

export function Title({ text }: TitleProps) {
  return <TitleContainer>{text}</TitleContainer>
}