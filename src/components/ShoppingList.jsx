import { useState } from "react";

import './ShoppingList.css'

export default function ShoppingList() { 

    const [itemsList, setItemsList] = useState([])
    
    function createItem() {
      return (itemsList.map(item => {
        return (
          <>
          <li id={item.id} key={item.id} className="items">
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
                    <input id="save-item" type="text" placeholder="Novo item..." onKeyDown={enter} />
                    <div className="button-add">
                        <i onClick={save}>+</i>
                    </div>
                </div>
            </>
        )
    }

    function enter(event) {
      if(event.keyCode === 13) {
        save()
      }
    }

    function save() {
        const input = document.getElementById('save-item')    
        const newItem = input.value

        function checkId() {
          let newId = 1
          let idList = itemsList.map(item => item.id)

          while (idList.includes(newId)) {
            newId += 1
          }

          return newId
        }

        const idValue = checkId()
            
        setItemsList([
            ...itemsList,
            {id: idValue, item: newItem}]
        )
        
        input.value = ''
    }
    
    return (
      <>
        <ul>{createItem()}</ul>
        {inputItem()}
      </>
    ) 
  }