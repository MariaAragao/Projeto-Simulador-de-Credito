import { render, screen } from '@testing-library/react'
import { Header } from '../../src/components/Header'

describe('Header component', () => {
  it('renders the logo image with correct alt text', () => {
    render(<Header />)

    const logo = screen.getByAltText('Logo do Simulador') as HTMLImageElement

    expect(logo).toBeInTheDocument()
    expect(logo.src).toBe('https://upload.wikimedia.org/wikipedia/commons/6/6d/Creditas_Logo_Principal.png')
  })
})
