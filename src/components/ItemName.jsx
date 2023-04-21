import './ItemName.css'

export default function itemName(props) {
    
    if(props.check === false) {        
        return (
            <>
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