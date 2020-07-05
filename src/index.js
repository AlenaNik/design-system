import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { PrimaryButton } from './components/Buttons'
import { SecondaryButton } from './components/Buttons'
import { TertiaryButton } from './components/Buttons'
import { GlobalStyle, darkTheme, props } from './utils'
import { SignUpModal } from "./components";

const App = () => {
        const [useDarkTheme, setUseDarkTheme] = useState(false)
        const [showModal, setShowModal] = useState(false);

        return (
            <ThemeProvider theme={useDarkTheme ? darkTheme : props}>
                    <button style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
                            onClick={() => setUseDarkTheme(true)}
                    >
                            Dark Theme
                    </button>
                    <button style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
                            onClick={() => setUseDarkTheme(false)}
                    >
                            Default Theme
                    </button>
                <button style={{ margin: "0 16px 24px", padding: "8px", background: "none"}}
                        onClick={() => setShowModal(!showModal)}
                >
                    Toggle Modal
                </button>
                    {/*<div style={{ background: useDarkTheme ? props.primaryColor : darkTheme.primaryColor,*/}
                    {/*    display: "flex",*/}
                    {/*    width: "100vw",*/}
                    {/*    height: "100vh",*/}
                    {/*    alignItems: "center",*/}
                    {/*    justifyContent: "space-around",*/}
                    {/*    flexWrap: "wrap"*/}
                    {/*}}>*/}
                            {/*<PrimaryButton modifiers="small">Primary button</PrimaryButton>*/}
                            {/*<SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>Secondary*/}
                            {/*        button</SecondaryButton>*/}
                            {/*<TertiaryButton>Ternary button</TertiaryButton>*/}
                            {/*<br/>*/}
                            {/*<PrimaryButton>Primary button</PrimaryButton>*/}
                            {/*<SecondaryButton>Secondary button</SecondaryButton>*/}
                            {/*<TertiaryButton>Ternary button</TertiaryButton>*/}
                            {/*<br/>*/}
                            {/*<PrimaryButton disabled>Primary button</PrimaryButton>*/}
                            {/*<SecondaryButton disabled>Secondary button</SecondaryButton>*/}
                            {/*<TertiaryButton disabled>Ternary button</TertiaryButton>*/}
                            {/*<br/>*/}
                            {/*<PrimaryButton modifiers="warning">Primary button</PrimaryButton>*/}
                            {/*<PrimaryButton modifiers="warning">Primary button</PrimaryButton>*/}
                            {/*<SecondaryButton modifiers={["large", "warning"]}>Secondary button</SecondaryButton>*/}
                            {/*<TertiaryButton>Ternary button</TertiaryButton>*/}
                    {/*</div>*/}
                        <SignUpModal showModal={showModal} setShowModal={setShowModal}/>
                    <GlobalStyle />
            </ThemeProvider>
        )
}

ReactDOM.render(<App/>, document.querySelector("#root"))
