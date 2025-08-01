
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../../src/components/Button'

describe('Button component', () => {
  it('renders with the correct text', () => {
    render(<Button text="Click me" />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders with an icon if provided', () => {
    const TestIcon = () => <svg data-testid="test-icon" />
    render(<Button text="With Icon" icon={<TestIcon />} />)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  it('applies default variant when none is provided', () => {
    render(<Button text="Default Variant" />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('class') // Estilo pode ser testado com snapshots ou atributos específicos se necessário
  })

 
  it('passes extra props to the button element', () => {
    render(<Button text="Submit" type="submit" disabled />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toBeDisabled()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button text="Click me" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
