import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={`Digite ${props.placeholder}...`}/>
        </div>
    )
}

export default CampoTexto;