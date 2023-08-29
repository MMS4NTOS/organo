import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from "uuid";


function App(props) {

const [membros, setMembros] = useState(JSON.parse(localStorage.getItem("Membros")) || []);

const [times, setTimes] = useState([
  {
    id: uuidv4(),
    nome: "Time dois",
    cor: "#E8F8FF",
  },
  {
    id: uuidv4(),
    nome: "Time três",
    cor: "#F0F8E2",
  },
  {
    id: uuidv4(),
    nome: "Time quatro",
    cor: "#FDE7E8",
  },
  {
    id: uuidv4(),
    nome: "Time cinco",
    cor: "#FAE9F5",
  },
  {
    id: uuidv4(),
    nome: "Time seis",
    cor: "#FFF5D9",
  },
  {
    id: uuidv4(),
    nome: "Time sete",
    cor: "#FFEEDF",
  },
]);

const aoMembroAdicionado = (membro) => {
  setMembros(prev => [...prev, membro]);
  localStorage.setItem("Membros", JSON.stringify([...membros, membro]));
  
}

const aoRemover = (nome) => {
  const arr = membros.filter(membro => membro.nome !== nome)
  setMembros(arr)
  localStorage.setItem("Membros", JSON.stringify(arr));
}

function mudaCorTime(cor, id) {
  setTimes( 
    times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }
  ))
}

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoAdicionar={(membro) => aoMembroAdicionado(membro)} />
      {times.map(time => 
      <Time 
          key={uuidv4()} 
          nome={time.nome}
          id={time.id}
          mudarCor = {(cor, id) => mudaCorTime(cor, id)} 
          corPrimaria={time.corPrimaria} 
          cor={time.cor}
          membros={membros.filter(membro => membro.time === time.nome)}
          aoRemover={nome => aoRemover(nome)}
          />)
          }
          <Rodape />
    </div>
  );
}

export default App
