import { useState } from "react";

import './ShoppingList.css'

export default function ShoppingList() { 

    const [itemsList, setItemsList] = useState([
          {id: 1, item:'teste'},
          {id: 2, item:'teste2'}
        ])
    
    function createItem() {
      return (itemsList.map(item => {
        return (
          <>
          <li id={item.id} className="items">
            <div className="name-item">
              <label>{item.item}</label>
            </div>
            <div className="div-icons">
              <i>V</i>
              <i>X</i>
            </div>
          </li>
          </>
        );
      }));
    }

    function inputItem() {
        return (
            <>
                <div className="new-item">
                    <input id="save-item" type="text" placeholder="Novo item..." />
                    <div className="button-add">
                        <i onClick={save}>+</i>
                    </div>
                </div>
            </>
        )
    }

    function save() {   
        const newItem = document.getElementById('save-item').value
            
        setItemsList([
            ...itemsList,
            {id: 3, item: newItem}]
            )     
    }
    
    return (
      <>
        <ul>{createItem()}</ul>
        {inputItem()}
      </>
    ) 
  }