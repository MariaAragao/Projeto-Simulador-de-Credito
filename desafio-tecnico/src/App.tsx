import { useState } from 'react'
import {Header} from '@src/components/Header';
import { GlobalStyle } from '@src/styles/Global/globalStyles';
import { SimulationForm } from '@src/components/Form'
import { Card } from '@src/components/Card'
import { Title } from '@src/components/Title';
import { Footer } from '@src/components/Footer';
import {Container} from '@src/styles'

function App() {
  const [loanValue, setLoanValue] = useState('')
  const [term, setTerm] = useState('')
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [result, setResult] = useState({
    installment: '',
    total: '',
    interest: ''
  })

  const handleSimulate = () => {
    const numericValue = Number(
      loanValue.replace(/[^0-9,]+/g, '').replace(',', '.')
    )
    const months = Number(term)
    if (!numericValue || !months || !birthDate) return

    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    const isBirthdayPassed = m < 0 || (m === 0 && today.getDate() < birthDate.getDate())
    const finalAge = isBirthdayPassed ? age - 1 : age
    
    let annualRate = 0
    if (finalAge <= 25) annualRate = 0.05
    else if (finalAge <= 40) annualRate = 0.03
    else if (finalAge <= 60) annualRate = 0.02
    else annualRate = 0.04

    const monthlyRate = annualRate / 12
    const r = monthlyRate
    const n = months
    const PV = numericValue
    const PMT = (PV * r) / (1 - Math.pow(1 + r, -n))

    const totalToPay = PMT * n
    const interestPercent = ((totalToPay - PV) / PV) * 100

    setResult({
      installment: `R$ ${PMT.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`,
      total: `R$ ${totalToPay.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`,
      interest: `${interestPercent.toFixed(1).replace('.', ',')}%`

    })
  }

  const handleResetResult = () => {
    setResult({
      installment: '',
      total: '',
      interest: ''
    })
  }

  const handleClearAll = () => {
    setLoanValue('')
    setTerm('')
    setBirthDate(null)
    setResult({
      installment: '',
      total: '',
      interest: ''
    })
  }


  return (
    <>
    <Container>
      <GlobalStyle />
      <Header />
      <Title text='Simule aqui o seu crédito' />
      <SimulationForm
        loanValue={loanValue}
        setLoanValue={setLoanValue}
        term={term}
        setTerm={setTerm}
        birthDate={birthDate}
        setBirthDate={setBirthDate}
        handleSimulate={handleSimulate}
        onDelete={handleClearAll}

      />

      <Card installment={result.installment}
        total={result.total}
        interest={result.interest}
        onReset={handleResetResult} />
        <Footer/>
        </Container>
    </>


  )
}

export default App
