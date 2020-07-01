import React from 'react'
import ReactDOM from 'react-dom'
import { PrimaryButton } from './components/Buttons'
import { SecondaryButton } from './components/Buttons'
import { TernaryButton } from './components/Buttons'

const App = () => (
    <div>
        <PrimaryButton>Primary button</PrimaryButton>
        <SecondaryButton>Secondary button</SecondaryButton>
        <TernaryButton>Ternary button</TernaryButton>
    </div>
)

ReactDOM.render(<App/>, document.querySelector("#root"))
