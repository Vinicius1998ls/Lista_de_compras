import React from "react";

import ShoppingList from "./ShoppingList.css"

export default () => (
    <>
        <div className="list-itens">
            
            <div className="itens">
                <div className="name-item">
                    <label>Item_1</label>
                </div>
                <div className="div-icons">
                    <i>V</i>
                    <i>X</i>
                </div>
            </div>

            <div className="itens">
                <div className="name-item">
                    <label>Item_2</label>
                </div>
                <div className="div-icons">
                    <i>V</i>
                    <i>X</i>
                </div>
            </div>

        </div>
    </>
)