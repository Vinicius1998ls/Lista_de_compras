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
                {item.checked ? <label><del>{item.item}</del></label> : 
                <label>{item.item}</label>}                
              </div>
              <div className="div-icons">
                {item.checked ? <i onClick={() => remove(item.id)}>X</i> : 
                <>
                    <i onClick={() => check(item.id)}>V</i>
                    <i onClick={() => remove(item.id)}>X</i>
                </>}
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
    
    function check(id) {
      setItemsList(
        itemsList.map(item => {
          if(item.id === id) {
            return {...item, checked: true}
          }
          return item
        })
      )
    }

    function remove(id) {
        setItemsList(itemsList.filter(item =>
            item.id !== id))
    }
    
    return (
      <>
        <ul>{createItem()}</ul>
        {inputItem()}
      </>
    ) 
  }