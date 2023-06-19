import Membro from '../Membro';
import './Time.css'

const Time = (props) => {
    return (
      (props.membros.length > 0) ?
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="membros">
          {props.membros.map(membro => <Membro key={membro.nome} corFundo={props.corPrimaria} nome={membro.nome} imagem={membro.imagem} cargo={membro.cargo}/>)}
        </div>
      </section> : ""
    );
}

export default Time;