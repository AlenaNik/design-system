import React from 'react'
import ReactDOM from 'react-dom'
import { PrimaryButton } from './components/Buttons'
import { SecondaryButton } from './components/Buttons'
import { TernaryButton } from './components/Buttons'
import { GlobalStyle } from './utils'

const App = () => (
    <div>
        <PrimaryButton modifiers="small">Primary button</PrimaryButton>
        <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Secondary button</SecondaryButton>
        <TernaryButton>Ternary button</TernaryButton>
        <br/>
        <PrimaryButton>Primary button</PrimaryButton>
        <SecondaryButton>Secondary button</SecondaryButton>
        <TernaryButton>Ternary button</TernaryButton>
        <br/>
        <PrimaryButton disabled>Primary button</PrimaryButton>
        <SecondaryButton disabled>Secondary button</SecondaryButton>
        <TernaryButton disabled>Ternary button</TernaryButton>
        <br/>
        <PrimaryButton modifiers="warning">Primary button</PrimaryButton>
        <PrimaryButton modifiers="warning">Primary button</PrimaryButton>
        <SecondaryButton modifiers={["large", "warning"]}>Secondary button</SecondaryButton>
        <TernaryButton>Ternary button</TernaryButton>
        <GlobalStyle></GlobalStyle>
    </div>
)

ReactDOM.render(<App/>, document.querySelector("#root"))
