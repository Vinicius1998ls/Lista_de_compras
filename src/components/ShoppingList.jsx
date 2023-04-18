import { useState } from "react";

import './ShoppingList.css'
import './fonts.css'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

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
                {item.checked ? 
                    <FontAwesomeIcon icon={faXmark} className="remove" onClick={() => remove(item.id)} /> : 
                <>
                    <FontAwesomeIcon icon={faCheck} className="check" onClick={() => check(item.id)} />
                    <FontAwesomeIcon icon={faXmark} className="remove" onClick={() => remove(item.id)} />
                    
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
                        <i><FontAwesomeIcon icon={faPlus} onClick={save} /></i>
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