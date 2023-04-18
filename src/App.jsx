import React from "react";

import "./App.css";
import './components/fonts.css'

import ShoppingList from "./components/ShoppingList";


export default function App() {
    return (
        <>
            <h1>LISTA DE COMPRAS</h1>

            <ShoppingList></ShoppingList>
        </>
    )
}