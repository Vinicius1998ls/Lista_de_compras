import { useState } from "react";

import ItemName from "./ItemName";

import './ShoppingList.css'
import './ClearButton.css'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingList() { 

    const [itemsList, setItemsList] = useState([])
    const [enable, setEnable] = useState(false)
    
    function createItem() {
      return (itemsList.map(item => {
        return (          
          <>            
            <li id={item.id} key={item.id} className="items">
              <div className="name-item">
                <ItemName name={item.item} check={item.checked} ></ItemName>             
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
                    <input id="save-item" type="text" maxLength={22} 
                    placeholder="Novo item..." onKeyDown={enter} onInput={handleChangeEnable} />
                    <div className="button-add">
                        {enable ? <FontAwesomeIcon icon={faPlus} onClick={save} style={{color: '#CE050F'}} /> :
                        <FontAwesomeIcon icon={faPlus} style={{color: '#494949'}} />}                        
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

        if(newItem.replace(/\s+/g, '') !== '') {
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
                {id: idValue, item: newItem, checked: false}]
            )
            
            input.value = ''
            handleChangeEnable()
        }
    }

    function handleChangeEnable() {
        const inputItem = document.getElementById('save-item').value
        
        if(inputItem.replace(/\s+/g, '') !== '') {
            setEnable(true)            
        } else {
            setEnable(false)
        }
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

    function clearList() {
      return (
        <div className='button-line'>
            <button onClick={handleClear} ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Limpar</button>
        </div>
      )
    }

    function handleClear() {
      setItemsList([])
    }
    
    return (
      <>
        {clearList()}        
        <ul>{createItem()}</ul>        
        {inputItem()}
      </>
    ) 
  }