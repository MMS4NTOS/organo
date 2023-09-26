import './campo.css'

const Campo = (props) => {
    
    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input 
            type={props.type} value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={`Digite ${props.placeholder}...`}/>
        </div>
    )
}

export default Campo;