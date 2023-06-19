import './Membro.css'

const Membro = ({nome, imagem, cargo, corFundo}) => {

  const excluirMembro = (nome) => {
    console.log(nome)
  }
    return (
      <div className="membro">
        <div className="cabecalho" style={{backgroundColor: corFundo}}>
          <img src={imagem} alt={nome} />
          <button onClick={() => excluirMembro(nome)}>X</button>
        </div>
        <div className="membro_rodape">
          <h4>{nome}</h4>
          <h5>{cargo}</h5>
        </div>
      </div>
    );
}

export default Membro;