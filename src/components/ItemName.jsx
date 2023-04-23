import './ItemName.css'

export default function itemName(props) {
    // se false carrega no do item normal
    // se true carrega o item com um risco
    if(props.check === false) {        
        return (
            <>
                {/* se for menor que 16 caracteres carrega com a fonte normal
                se for maior carrega com uma fonte menor */}
                {props.name.length < 16 ? <label className='normal-name'>{props.name}</label> : 
                <label className="big-name">{props.name}</label>}                
            </>
        )
    } else {
        return (
            <>
                {props.name.length < 16 ? <label className='normal-name'><del>{props.name}</del></label> : 
                <label className="big-name" ><del>{props.name}</del></label>}                
            </>
        )
    }

    
}