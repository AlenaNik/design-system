import React from 'react'
import ReactDOM from 'react-dom'
import { PrimaryButton } from './components/Buttons'
import { SecondaryButton } from './components/Buttons'
import { TernaryButton } from './components/Buttons'
import { GlobalStyle } from './utils'

const App = () => (
    <div>
        <PrimaryButton disabled>Primary button</PrimaryButton>
        <SecondaryButton disabled>Secondary button</SecondaryButton>
        <TernaryButton disabled>Ternary button</TernaryButton>
        <GlobalStyle disabled></GlobalStyle>
    </div>
)

ReactDOM.render(<App/>, document.querySelector("#root"))
