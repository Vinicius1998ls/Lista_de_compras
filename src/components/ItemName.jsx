export default function itemName(props) {
    
    if(props.check === false) {        
        return (
            <>
                {props.name.length < 16 ? <label>{props.name}</label> : 
                <label style={{fontSize: '1rem', transform: 'translateY(5px)' }}>{props.name}</label>}                
            </>
        )
    } else {
        return (
            <>
                {props.name.length < 16 ? <label><del>{props.name}</del></label> : 
                <label style={{fontSize: '1rem', transform: 'translateY(5px)' }}><del>{props.name}</del></label>}                
            </>
        )
    }

    
}