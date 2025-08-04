import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App'

// Usa hora fixa para garantir idade correta no cálculo
const MOCK_TODAY = new Date('2025-08-01')
jest.useFakeTimers().setSystemTime(MOCK_TODAY)

describe('App integration', () => {
    it('renders header, title, form, card and footer', () => {
        render(<App />)

        expect(screen.getByAltText('Logo do Simulador')).toBeInTheDocument()
        expect(screen.getByText('Simule aqui o seu crédito')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Qual o valor do empréstimo?')).toBeInTheDocument()
        expect(screen.getByText('Simular')).toBeInTheDocument()
        expect(screen.getByText('Limpar Tudo')).toBeInTheDocument()
        expect(screen.getByText(/Simulador de Crédito/)).toBeInTheDocument()
    })

    it('performs credit simulation correctly', async () => {
        render(<App />)

        const loanInput = screen.getByPlaceholderText('Qual o valor do empréstimo?')
        const termSelect = screen.getByRole('combobox')
        const birthdateInput = screen.getByPlaceholderText('dd/mm/aaaa')

        // Preenche os campos
        fireEvent.change(loanInput, { target: { value: '10000' } })
        fireEvent.change(termSelect, { target: { value: '12' } })
        fireEvent.change(birthdateInput, { target: { value: '01/01/1990' } })

        // Clica em simular
        fireEvent.click(screen.getByText('Simular'))

        // Aguarda aparecer valores formatados
        const resultInstallments = await screen.findAllByText(/R\$ .*,\d{2}/, {}, { timeout: 10000 })

        expect(resultInstallments.length).toBeGreaterThan(0)

        expect(screen.getByText('Total a pagar')).toBeInTheDocument()
        expect(screen.getByText('Total de juros pagos')).toBeInTheDocument()
    }, 10000)

    it('clears form when clicking "Limpar Tudo"', async () => {
        render(<App />)

        const loanInput = screen.getByPlaceholderText('Qual o valor do empréstimo?')
        const termSelect = screen.getByRole('combobox')
        const birthdateInput = screen.getByPlaceholderText('dd/mm/aaaa')

        // Preenche os campos
        fireEvent.change(loanInput, { target: { value: '8000' } })
        fireEvent.change(termSelect, { target: { value: '24' } })
        fireEvent.change(birthdateInput, { target: { value: '01/01/1980' } })

        // Clica em "Limpar Tudo"
        fireEvent.click(screen.getByText('Limpar Tudo'))

        // Confirma que os campos foram limpos
        expect((loanInput as HTMLInputElement).value).toBe('')
        expect((termSelect as HTMLSelectElement).value).toBe('')
        expect((birthdateInput as HTMLInputElement).value).toBe('')
    }, 10000)
})
