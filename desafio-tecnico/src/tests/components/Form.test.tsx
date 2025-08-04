import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SimulationForm } from '../../src/components/Form'

describe('SimulationForm component', () => {
  const setup = () => {
    const mockSimulate = jest.fn()
    const mockDelete = jest.fn()
    const mockSetLoanValue = jest.fn()
    const mockSetTerm = jest.fn()
    const mockSetBirthDate = jest.fn()

    render(
      <SimulationForm
        loanValue="1000"
        setLoanValue={mockSetLoanValue}
        term="12"
        setTerm={mockSetTerm}
        birthDate={null}
        setBirthDate={mockSetBirthDate}
        handleSimulate={mockSimulate}
        onDelete={mockDelete}
      />
    )

    return {
      mockSimulate,
      mockDelete,
      mockSetLoanValue,
      mockSetTerm,
      mockSetBirthDate,
    }
  }

  it('renders all fields correctly', () => {
    setup()
    expect(screen.getByPlaceholderText('Qual o valor do empréstimo?')).toBeInTheDocument()
    expect(screen.getByText('12 meses')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('dd/mm/aaaa')).toBeInTheDocument()
    expect(screen.getByText('Simular')).toBeInTheDocument()
    expect(screen.getByText('Limpar Tudo')).toBeInTheDocument()
  })

  it('calls setLoanValue when typing in CurrencyInput', async () => {
    const { mockSetLoanValue } = setup()
    const input = screen.getByPlaceholderText('Qual o valor do empréstimo?')
    await userEvent.type(input, '500')
    expect(mockSetLoanValue).toHaveBeenCalled()
  })

  it('calls setTerm when selecting an option', () => {
    const { mockSetTerm } = setup()
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '24' } })
    expect(mockSetTerm).toHaveBeenCalledWith('24')
  })


  it('calls handleSimulate when clicking Simular button', () => {
    const { mockSimulate } = setup()
    fireEvent.click(screen.getByText('Simular'))
    expect(mockSimulate).toHaveBeenCalledTimes(1)
  })

  it('calls onDelete when clicking Limpar Tudo button', () => {
    const { mockDelete } = setup()
    fireEvent.click(screen.getByText('Limpar Tudo'))
    expect(mockDelete).toHaveBeenCalledTimes(1)
  })
})
