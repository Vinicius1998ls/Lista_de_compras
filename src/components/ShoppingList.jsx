import { useState } from "react";

import ItemName from "./ItemName";

import './ShoppingList.css'
import './ClearButton.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

export default function ShoppingList() {

    //Criação do estado da lista
    const [itemsList, setItemsList] = useState([])
    //Estado do botão de adicionar
    const [enable, setEnable] = useState(false)

    //Renderiza os itens da lista
    function createItem() {
        //renderiza a lista
        return (itemsList.map(item => {
            return (
                <>
                    <li id={item.id} key={item.id} className="items">
                        <div className="name-item">
                            <ItemName name={item.item} check={item.checked} ></ItemName>
                        </div>
                        <div className="div-icons">
                            {/* se item estiver marcado como confirmado ele renderiza só o botão cancelar
                            se não ele renderiza os botões confirmar e cancelar */}
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

    //Cria o input para inserir o novo item
    function inputItem() {
        return (
            <>
                <div className="new-item">
                    <input id="save-item" type="text" maxLength={22}
                        // enter adiciona o item                    
                        placeholder="Novo item..." onKeyDown={enter} onInput={handleChangeEnable} />
                    <div className="button-add">
                        {/* ao digitar chama a função handleChangeEnable, 
                        se for verdadeiro o botão adionar é habilitado
                        se falso desabilita o botão adicionar e torna impossivel adicionar um novo item 
                        mesmo que aperte enter */}
                        {enable ? <FontAwesomeIcon icon={faPlus} onClick={save} style={{ color: '#CE050F' }} /> :
                            <FontAwesomeIcon icon={faPlus} style={{ color: '#494949' }} />}
                    </div>
                </div>
            </>
        )
    }

    function enter(event) {
        // se enter for apertado chama a função save
        if (event.keyCode === 13) {
            save()
        }
    }

    function save() {
        // adiciona o valor do input na variavel
        const input = document.getElementById('save-item')
        const newItem = input.value

        // se o valor for diferente de vazio o trecho a seguir é executado
        // .replace(/\s+/g, '') remove os espaços para evitar que um 
        // novo item seja adicionado somente com espaços
        if (newItem.replace(/\s+/g, '') !== '') {
            //aqui faz a checagem para não repetir um ID
            function checkId() {
                let newId = 1
                let idList = itemsList.map(item => item.id)

                while (idList.includes(newId)) {
                    newId += 1
                }

                return newId
            }

            const idValue = checkId()

            // adiciona o novo item
            setItemsList([
                ...itemsList,
                { id: idValue, item: newItem, checked: false }
            ])

            // esvazia o input
            input.value = ''
            // chama a função para desabilitar o botão adicionar 
            handleChangeEnable()
        }
    }

    // Função que habilita e desabilita o botão adicionar do input
    function handleChangeEnable() {
        const inputItem = document.getElementById('save-item').value

        if (inputItem.replace(/\s+/g, '') !== '') {
            setEnable(true)
        } else {
            setEnable(false)
        }
    }

    // altera o checked para true fazendo com que o item da lista 
    // seja renderizado com um risco
    function check(id) {
        setItemsList(
            itemsList.map(item => {
                if (item.id === id) {
                    return { ...item, checked: true }
                }
                return item
            })
        )
    }

    // remove o item da lista
    function remove(id) {
        setItemsList(itemsList.filter(item =>
            item.id !== id))
    }

    // Boão para limpar lista
    function clearList() {
        return (
            <div className='button-line'>
                <button onClick={handleClear} ><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Limpar</button>
            </div>
        )
    }

    //limpa lista
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