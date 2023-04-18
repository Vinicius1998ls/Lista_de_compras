import React from "react";

import ShoppingList from "./components/ShoppingList";

import "./App.css";
import './components/fonts.css'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('./fonts.css');

    body {
        font-family: 'Amatic SC', cursive;
        font-family: 'Oswald', sans-serif;
    }
`

const Heading = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 700
`

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Heading>LISTA DE COMPRAS</Heading>

            <ShoppingList></ShoppingList>
        </>
    )
}