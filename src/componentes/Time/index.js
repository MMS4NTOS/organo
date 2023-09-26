import Membro from '../Membro';
import './Time.css'
import hexToRgba from "hex-to-rgba";

const Time = ({membros, aoRemover, mudarCor, time, aoFavoritar}) => {

    const atualizaMembros = (id) => {
      aoRemover(id)
    }

    return membros.length > 0 ? (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: hexToRgba(time.cor, 0.4),
        }}
      >
        <input
          type="color"
          className="input-cor"
          value={time.cor}
          onChange={(e) => {
            mudarCor(e.target.value, time.id);
          }}
        />
       
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="membros">
          {membros.map((membro) => (
            <Membro
              key={membro.nome}
              id={membro.id}
              corFundo={time.cor}
              nome={membro.nome}
              imagem={membro.imagem}
              cargo={membro.cargo}
              favorito={membro.favorito}
              aoFavoritar={aoFavoritar}
              removeMembro={(id) => atualizaMembros(id)}
            />
          ))}
        </div>
      </section>
    ) : (
      ""
    );
}

export default Time;