import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from "uuid";

function App() {

const [membros, setMembros] = useState(JSON.parse(localStorage.getItem("Membros")) || []);

const [times, setTimes] = useState(
  JSON.parse(localStorage.getItem("Times")) || []);

const aoMembroAdicionado = (membro) => {
  setMembros(prev => [...prev, membro]);
  localStorage.setItem("Membros", JSON.stringify([...membros, membro]));
}

const aoRemover = (id) => {
  const arr = membros.filter(membro => membro.id !== id)
  setMembros(arr)
  localStorage.setItem("Membros", JSON.stringify(arr));
}

function mudaCorTime(cor, id){

  setTimes( 
    times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
}

function adicionarTime(novoTime)  {
  setTimes ([...times, {...novoTime, id: uuidv4()}])
  localStorage.setItem("Times", JSON.stringify([...times, novoTime]))
}

function resolverFavorito(id) {
  setMembros(membros.map (membro =>
    {
      if(membro.id === id) {
      membro.favorito = !membro.favorito
    }
    return membro }
  ))
}

 return (
   <div className="App">
     <Banner />
     <Formulario
       times={times.map((time) => time.nome)}
       aoAdicionar={(membro) => aoMembroAdicionado(membro)}
       adicionarTime={adicionarTime}
     />
   
       {times.map((time) => 
        { const key = time.id;
        return (
         <Time
           key={key}
           time={time}
           mudarCor={mudaCorTime}
           membros={membros.filter((membro) => membro.time === time.nome)}
           aoFavoritar={resolverFavorito}
           aoRemover={(id) => aoRemover(id)}
         /> 
        )
        })}
     <Rodape />
   </div>
 );
}

export default App

