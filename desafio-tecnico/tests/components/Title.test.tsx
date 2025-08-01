import { render, screen } from '@testing-library/react'
import { Title } from '../../src/components/Title'

describe('Title component', () => {
  it('renders the provided text', () => {
    const testText = 'Simulação de Crédito'
    render(<Title text={testText} />)

    const titleElement = screen.getByText(testText)
    expect(titleElement).toBeInTheDocument()
  })
})
