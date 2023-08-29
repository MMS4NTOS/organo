import Membro from '../Membro';
import './Time.css'
import hexToRgba from "hex-to-rgba";
import { v4 as uuidv4 } from 'uuid'

const Time = (props) => {

    const atualizaMembros = (nomeRecebido) => {
      props.aoRemover(nomeRecebido)
    }

    return props.membros.length > 0 ? (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(props.cor, 0.4),
        }}
      >
        <input
          value={props.cor}
          type="color"
          className="input-cor"
          onChange={e => {
            props.mudarCor(e.target.value, props.id);
          }}
        />
       
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="membros">
          {props.membros.map((membro) => (
            <Membro
              key={uuidv4()}
              corFundo={props.cor}
              nome={membro.nome}
              imagem={membro.imagem}
              cargo={membro.cargo}
              removeMembro={(nome) => atualizaMembros(nome)}
            />
          ))}
        </div>
      </section>
    ) : (
      ""
    );
}

export default Time;