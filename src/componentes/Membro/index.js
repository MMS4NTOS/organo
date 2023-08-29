import {AiFillCloseCircle} from 'react-icons/ai'
import './Membro.css'

const Membro = ({nome, imagem, cargo, corFundo, removeMembro}) => {

  const excluirMembro = (nome) => {
    removeMembro(nome)
  }
  
    return (
      <div className="membro">
        <div className="cabecalho" style={{backgroundColor: corFundo}}>
          <img src={imagem} alt={nome} />
          <AiFillCloseCircle  className="botao-deletar" size={25} onClick={() => excluirMembro(nome)}/>
        </div>
        <div className="membro_rodape">
          <h4>{nome}</h4>
          <h5>{cargo}</h5>
        </div>
      </div>
    );
}

export default Membro;