import React from "react";

import App from "./App.css";
import ShoppingList from "./components/ShoppingList";
import InputItem from "./components/InputItem";

export default() => (
    <>
        <h1>Lista de compras</h1>
        <ShoppingList></ShoppingList>
        <InputItem></InputItem>
    </>

)