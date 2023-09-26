import { AiFillCloseCircle, AiFillStar, AiOutlineStar } from "react-icons/ai";
import './Membro.css'

const Membro = ({nome, imagem, cargo, corFundo, removeMembro, id, aoFavoritar, favorito}) => {

  const excluirMembro = (id) => {
    removeMembro(id)
  }
  
  function favoritar() {
    aoFavoritar(id);
  }
  
    return (
      <div className="membro">
        <div className="cabecalho" style={{ backgroundColor: corFundo }}>
          <img src={imagem} alt={nome} />
          <AiFillCloseCircle
            className="botao-deletar"
            size={25}
            onClick={() => excluirMembro(id)}
          />
        </div>
        <div className="membro_rodape">
          <h4>{nome}</h4>
          <h5>{cargo}</h5>
          <div className="favorito">
            {favorito ? (
              <AiFillStar size={25} color="orange" onClick={favoritar} />
            ) : (
              <AiOutlineStar size={25}  onClick={favoritar} />
            )}
          </div>
        </div>
      </div>
    );
}

export default Membro;