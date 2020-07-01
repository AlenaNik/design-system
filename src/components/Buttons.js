import styled from 'styled-components'
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from 'styled-components-modifiers'

// Figma assets
// https://www.figma.com/file/ehCOKzpFwHb5jQvH74MOxi/Untitled?node-id=6%3A240

const BUTTON_MODIFIERS = {
    small: () => `
        font-size: ${typeScale.helperText};
        padding: 8px;
    `,
    large: () => `
        font-size: ${typeScale.h5};
        padding: 16px 24px;
    `
}


const Button = styled.button`
    font-size: ${typeScale.paragraph};
    font-family: 'Red Hat Display', sans-serif;
    padding: 10px 20px;
    min-width: 100px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.2s linear, color 0.2s linear;
    &:hover {
        background-color: ${defaultTheme.primaryColorHover};
        color: ${defaultTheme.textColorOnPrimary};
    }
    &:focus {
       outline: 1px solid ${defaultTheme.primaryColorActive};
       outline-offset: 2px;
    }
    &:active {
        background-color: ${defaultTheme.primaryColorActive};
        border-color: ${defaultTheme.primaryColorActive};
        color: ${defaultTheme.textColorOnPrimary};
    }
`



export const PrimaryButton = styled(Button)`
// CSS
    background: ${defaultTheme.primaryColor};
    color: white;
    border: 1px solid transparent;
     &:disabled {
        background-color: ${defaultTheme.disabled};
        color: ${defaultTheme.textColorInverted};
        cursor: not-allowed;
     }
     
     ${applyStyleModifiers(BUTTON_MODIFIERS)}
     
`;



export const SecondaryButton = styled(Button)`
// CSS
    background: none;
    color: ${defaultTheme.primaryColor};
    border: 1px solid transparent;
      &:disabled {
        background: none;
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
     }
     
     ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TernaryButton = styled(Button)`
// CSS
    background: none;
    color: ${defaultTheme.primaryColor};
    border: 1px solid ${defaultTheme.primaryColor};
     &:disabled {
        background: none;
        border: 1px solid ${defaultTheme.disabled};
        color: ${defaultTheme.disabled};
        cursor: not-allowed;
     }
     
     ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
