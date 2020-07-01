import React from 'react'
import ReactDOM from 'react-dom'
import { PrimaryButton } from './components/Buttons'
import { SecondaryButton } from './components/Buttons'
import { TernaryButton } from './components/Buttons'
import { GlobalStyle } from './utils'

const App = () => (
    <div>
        <PrimaryButton modifiers="small">Primary button</PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Secondary button</SecondaryButton>
        <TernaryButton>Ternary button</TernaryButton>
        <GlobalStyle></GlobalStyle>
    </div>
)

ReactDOM.render(<App/>, document.querySelector("#root"))
