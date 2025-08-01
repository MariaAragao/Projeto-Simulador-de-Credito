import { render, screen, fireEvent } from '@testing-library/react'
import { Card } from '../../src/components/Card'

describe('Card component', () => {
  const defaultProps = {
    installment: 'R$ 500,00',
    total: 'R$ 6.000,00',
    interest: 'R$ 1.000,00'
  }

  it('renders all labels and values correctly', () => {
    render(<Card {...defaultProps} />)

    expect(screen.getByText('Valor das Parcelas')).toBeInTheDocument()
    expect(screen.getByText(defaultProps.installment)).toBeInTheDocument()

    expect(screen.getByText('Total a pagar')).toBeInTheDocument()
    expect(screen.getByText(defaultProps.total)).toBeInTheDocument()

    expect(screen.getByText('Total de juros pagos')).toBeInTheDocument()
    expect(screen.getByText(defaultProps.interest)).toBeInTheDocument()
  })

  it('does not render the button if onReset is not provided', () => {
    render(<Card {...defaultProps} />)
    expect(screen.queryByText('Refazer Simulação')).not.toBeInTheDocument()
  })

  it('renders the button if onReset is provided', () => {
    const mockReset = jest.fn()
    render(<Card {...defaultProps} onReset={mockReset} />)

    const button = screen.getByText('Refazer Simulação')
    expect(button).toBeInTheDocument()
  })

  it('calls onReset when the button is clicked', () => {
    const mockReset = jest.fn()
    render(<Card {...defaultProps} onReset={mockReset} />)

    const button = screen.getByText('Refazer Simulação')
    fireEvent.click(button)

    expect(mockReset).toHaveBeenCalledTimes(1)
  })
})
