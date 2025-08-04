import { FormContainer, SelectStyled, ButtonComponent, ButtonDelete } from './styles'
import CurrencyInput from 'react-currency-input-field'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import { MaskedDateInput } from '@src/components/MaskDateInput'
import { FiTrash2 } from 'react-icons/fi'

interface Props {
  loanValue: string
  setLoanValue: (val: string) => void
  term: string
  setTerm: (val: string) => void
  birthDate: Date | null
  setBirthDate: (date: Date | null) => void
  handleSimulate: () => void
  onDelete: () => void
}

export function SimulationForm({
  loanValue,
  setLoanValue,
  term,
  setTerm,
  birthDate,
  setBirthDate,
  handleSimulate,
  onDelete,
}: Props) {
  return (
    <FormContainer>
      <CurrencyInput
        placeholder="Qual o valor do empréstimo?"
        prefix="R$ "
        decimalsLimit={2}
        value={loanValue}
        onValueChange={(value) => setLoanValue(value || '')}
        className="input"
      />

      <SelectStyled value={term} onChange={(e) => setTerm(e.target.value)} required>
        <option value="">Prazo</option>
        {[6, 12, 24, 36, 48].map(month => (
          <option key={month} value={month}>{month} meses</option>
        ))}
      </SelectStyled>

      <DatePicker
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        selected={birthDate}
        onChange={(date: Date | null) => setBirthDate(date)}
        placeholderText="Data de Nascimento"
        dateFormat="dd/MM/yyyy"
        customInput={<MaskedDateInput />}
        calendarClassName="calendar"
        popperPlacement="right"
        showPopperArrow={false}
      />

      <ButtonComponent onClick={handleSimulate} text='Simular' variant='primary' />
      {onDelete && (
        <div>
          <ButtonDelete icon={<FiTrash2 />} text="Limpar Tudo" onClick={onDelete} variant="danger" />
        </div>
      )}
    </FormContainer>
  )
}