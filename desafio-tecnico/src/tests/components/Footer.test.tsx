import { render, screen } from '@testing-library/react'
import { Footer } from '../../src/components/Footer'

describe('Footer component', () => {
  it('renders the footer with current year and text', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    const footerText = screen.getByText(
      (content) =>
        content.includes(currentYear.toString()) &&
        content.includes('Simulador de Crédito')
    )

    expect(footerText).toBeInTheDocument()
  })
})
