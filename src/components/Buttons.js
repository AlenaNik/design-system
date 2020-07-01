import styled from 'styled-components'
import { defaultTheme, typeScale } from "../utils";


// Figma assets
// https://www.figma.com/file/ehCOKzpFwHb5jQvH74MOxi/Untitled?node-id=6%3A240

const Button = styled.button`
    font-size: ${typeScale.paragraph};
    font-family: 'Red Hat Display', sans-serif;
    padding: 10px 20px;
    min-width: 100px;
    cursor: pointer;
    border-radius: 5px;
`



export const PrimaryButton = styled(Button)`
// CSS
    background: ${defaultTheme.primaryColor};
    color: white;
    border: 1px solid transparent;
`;



export const SecondaryButton = styled(Button)`
// CSS
    background: none;
    color: ${defaultTheme.primaryColor};
    border: 1px solid transparent;
`;

export const TernaryButton = styled(Button)`
// CSS
    background: none;
    color: ${defaultTheme.primaryColor};
    border: 1px solid ${defaultTheme.primaryColor};
`;
