# 💰 Simulador de Crédito

Um projeto desenvolvido em React + TypeScript para simular parcelas de empréstimo de forma intuitiva e responsiva, com base em valor, prazo e data de nascimento do usuário.

---

## ✨ Funcionalidades

- 📅 Entrada de data com máscara e seletor (`react-datepicker`)
- 💲 Campo monetário com formatação automática (`react-currency-input-field`)
- 🧠 Cálculo automático da parcela, total e juros com base na idade do usuário
- ♻️ Botões para refazer simulação e limpar todos os dados
- 🧪 Testes unitários e de integração com Jest e React Testing Library

---


## 🚀 Tecnologias Utilizadas

- **React** + **TypeScript**
- **Styled-components** para estilização
- **react-datepicker** para entrada de datas
- **react-currency-input-field** para valores monetários
- **Jest** + **Testing Library** para testes

---

## ⚙️ Como rodar localmente

```bash
# Clone o projeto
git clone https://github.com/MariaAragao/Projeto-Simulador-de-Cr-dito.git
cd simulador-credito

# Instale as dependências
yarn install

# Rode em ambiente de desenvolvimento
yarn dev
```

---

## 🧪 Executando os testes

```bash
yarn test
```

Os testes cobrem:
- Componentes isolados (Header, Footer, Title, Card, Form)
- Interações completas com o usuário via `App.test.tsx`

---

## 📁 Estrutura do Projeto

```
src/
  components/
    Header/
    Footer/
    Title/
    Card/
    Form/
    MaskedDateInput/
  styles/
    Global/
    index.ts
  App.tsx
  main.tsx
tests/
  components/
  App.test.tsx
```

---

## 🧠 Lógica da Simulação

A fórmula usada para cálculo das parcelas é a **fórmula do PMT**:

```
PMT = (PV * r) / (1 - (1 + r)^-n)
```

Onde:
- `PV` = valor presente (empréstimo)
- `r` = taxa de juros mensal (baseada na idade do usuário)
- `n` = número de parcelas (prazo)

A taxa de juros é determinada pela idade:

| Faixa Etária | Taxa Anual |
|--------------|-------------|
| Até 25 anos  | 5%          |
| Até 40 anos  | 3%          |
| Até 60 anos  | 2%          |
| Acima de 60  | 4%          |

---

## 📌 Requisitos

- Node.js 18+
- Yarn ou npm
- Navegador moderno

---

## 📄 Licença

MIT — feito por Maria Eduarda

---
