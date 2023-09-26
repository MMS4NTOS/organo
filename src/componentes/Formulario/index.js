import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("Time um");
    const [novoTime, setNovoTime] = useState("");
    const [novaCor, setNovaCor] = useState("");

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoAdicionar({
          nome,
          cargo,
          imagem,
          time,
          id: uuidv4(),
          favorito: false
        })
        setCargo("");
        setImagem("");
        setNome("");
        setTime("");
    }

    return (
      <section className="formulario">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.adicionarTime({ nome: novoTime, cor: novaCor });
            setNovoTime("");
            setNovaCor("");
          }}
        >
          <h2>Preencha os dados para criar um time: </h2>
          <Campo
            obrigatorio={true}
            label="Nome"
            placeholder="Digite o nome do time"
            type="text"
            valor={novoTime}
            aoAlterado={(valor) => setNovoTime(valor)}
          />
          <Campo
            obrigatorio={true}
            label="Cor"
            type="color"
            valor={novaCor}
            aoAlterado={(valor) => setNovaCor(valor)}
          />

          <Botao>Criar Time</Botao>
        </form>
        <form onSubmit={aoSalvar}>
          <h2>Preencha os dados para criar o card do colaborador:</h2>
          <Campo
            obrigatorio={true}
            type="text"
            label="Nome"
            placeholder="seu nome"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <Campo
            obrigatorio={true}
            type="text"
            label="Cargo"
            placeholder="seu cargo"
            valor={cargo}
            aoAlterado={(valor) => setCargo(valor)}
          />
          <Campo
            label="Imagem"
            type="text"
            placeholder="o endereço da imagem"
            valor={imagem}
            aoAlterado={(valor) => setImagem(valor)}
          />
          <ListaSuspensa
            obrigatorio={true}
            type="text"
            label="Time"
            itens={props.times}
            valor={time}
            aoAlterado={(valor) => setTime(valor)}
          />
          <Botao>Criar Card</Botao>
        </form>
      </section>
    );
}

export default Formulario;