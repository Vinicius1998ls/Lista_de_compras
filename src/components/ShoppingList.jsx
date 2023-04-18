import { useState } from "react";

import './ShoppingList.css'
import './fonts.css'
import styled from "styled-components";

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'

const ItemsNamesFont = styled.label`
  font-family: 'Amatic SC', cursive;
  font-weight: 400;
`

const InputFont = styled.input`
  font-family: 'Amatic SC', cursive;
  font-weight: 400;
`

export default function ShoppingList() { 

    const [itemsList, setItemsList] = useState([])
    
    function createItem() {
      return (itemsList.map(item => {
        return (
          <>            
            <li id={item.id} key={item.id} className="items">
              <div className="name-item">
                {item.checked ? <ItemsNamesFont><del>{item.item}</del></ItemsNamesFont> : 
                <ItemsNamesFont>{item.item}</ItemsNamesFont>}                
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
                    <InputFont id="save-item" type="text" placeholder="Novo item..." onKeyDown={enter} />
                    
                    <div className="button-add">
                        <FontAwesomeIcon icon={faPlus} onClick={save} />
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