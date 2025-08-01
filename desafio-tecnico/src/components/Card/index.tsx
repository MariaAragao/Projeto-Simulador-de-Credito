import { CardContainer, Title, Value, Label, SubValue, ButtonComponent} from './styles'
import { FiRefreshCw } from 'react-icons/fi'
interface CardProps {
  installment: string
  total: string
  interest: string
  onReset?: () => void 
}

export function Card({ installment, total, interest,onReset }: CardProps) {
  return (
    <CardContainer>
      <Title>Valor das Parcelas</Title>
      <Value>{installment}</Value>
      <Label>Total a pagar</Label>
      <SubValue>{total}</SubValue>
      <Label>Total de juros pagos</Label>
      <SubValue>{interest}</SubValue>
        {onReset && (
        <div>
          <ButtonComponent icon={<FiRefreshCw />} text="Refazer Simulação" onClick={onReset} variant="secondary" />
        </div>
      )}
    </CardContainer>
  )
}