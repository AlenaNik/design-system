import React from 'react'
import styled from 'styled-components'

const primaryBlack = "#0e172c";
const primaryWhite = "#fffffe";
const primaryPink = "#fec7d7"
const primaryPurple = "#d9d4e7";
const primaryBrightPurple = '#a786df';

// Figma assets
// https://www.figma.com/file/ehCOKzpFwHb5jQvH74MOxi/Untitled?node-id=6%3A240

const Button = styled.button`
    font-size: 1rem;
    font-family: 'Red Hat Display', sans-serif;
    padding: 10px 20px;
    min-width: 100px;
    cursor: pointer;
    border-radius: 5px;
`



export const PrimaryButton = styled(Button)`
// CSS
    background: ${primaryBlack};
    color: white;
    border: 1px solid transparent;
`;



export const SecondaryButton = styled(Button)`
// CSS
    background: none;
    color: ${primaryBlack};
    border: 1px solid transparent;
`;

export const TernaryButton = styled(Button)`
// CSS
    background: none;
    color: ${primaryBlack};
    border: 1px solid ${primaryBlack};
`;
