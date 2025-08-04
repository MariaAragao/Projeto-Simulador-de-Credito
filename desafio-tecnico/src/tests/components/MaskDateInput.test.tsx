import { render, screen, fireEvent } from '@testing-library/react'
import { MaskedDateInput } from '../../src/components/MaskDateInput'

describe('MaskedDateInput', () => {
  it('renders with the correct placeholder and props', () => {
    render(<MaskedDateInput value="" onChange={() => {}} />)
    const input = screen.getByPlaceholderText('dd/mm/aaaa') as HTMLInputElement

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('maxLength', '10')
  })

  it('formats the input value as dd/mm/yyyy', () => {
    render(<MaskedDateInput value="12052025" onChange={() => {}} />)
    const input = screen.getByPlaceholderText('dd/mm/aaaa') as HTMLInputElement

    expect(input.value).toBe('12/05/2025')
  })

  it('calls onChange when input changes', () => {
    const handleChange = jest.fn()
    render(<MaskedDateInput value="" onChange={handleChange} />)

    const input = screen.getByPlaceholderText('dd/mm/aaaa')
    fireEvent.change(input, { target: { value: '12052025' } })

    expect(handleChange).toHaveBeenCalled()
  })

  it('trims non-digit characters and formats properly', () => {
    render(<MaskedDateInput value="1a2b0c5d2e0f2g5" onChange={() => {}} />)
    const input = screen.getByPlaceholderText('dd/mm/aaaa') as HTMLInputElement

    expect(input.value).toBe('12/05/2025')
  })

  it('cuts value to maximum of 8 digits before formatting', () => {
    render(<MaskedDateInput value="121212121212" onChange={() => {}} />)
    const input = screen.getByPlaceholderText('dd/mm/aaaa') as HTMLInputElement

    expect(input.value).toBe('12/12/1212') // limitado a 8 dígitos
  })
})
