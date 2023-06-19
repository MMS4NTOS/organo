import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App(props) {

const [membros, setMembros] = useState(JSON.parse(localStorage.getItem("Membros")) || []);

const times = [
  {
    nome: "Time um",
    corPrimaria: "#57C278",
    corSecundaria: "#D9F7E9",
  },
  {
    nome: "Time dois",
    corPrimaria: "#82CFFA",
    corSecundaria: "#E8F8FF",
  },
  {
    nome: "Time três",
    corPrimaria: "#A6D157",
    corSecundaria: "#F0F8E2",
  },
  {
    nome: "Time quatro",
    corPrimaria: "#E06B69",
    corSecundaria: "#FDE7E8",
  },
  {
    nome: "Time cinco",
    corPrimaria: "#DB6EBF",
    corSecundaria: "#FAE9F5",
  },
  {
    nome: "Time seis",
    corPrimaria: "#FFBA05",
    corSecundaria: "#FFF5D9",
  },
  {
    nome: "Time sete",
    corPrimaria: "#FF8A29",
    corSecundaria: "#FFEEDF",
  },
];

const aoMembroAdicionado = (membro) => {
  setMembros(prev => [...prev, membro]);
  localStorage.setItem("Membros", JSON.stringify([...membros, membro]));
  
}

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoAdicionar={(membro) => aoMembroAdicionado(membro)} />
      {times.map(time => 
      <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          membros={membros.filter(membro => membro.time === time.nome)}
          />)}
          <Rodape />
    </div>
  );
}

export default App
