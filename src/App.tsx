import Brilhante from "./Brilhante.tsx";
import Disciplina from "./Disciplina.tsx"
import Incapacitado from "./Incapacitado.tsx";
import Pokemon from "./Pokemon.tsx";
import type { Pokemon as TPokemon } from "./types.ts"

const p1: TPokemon = {
  name: "Pokochó",
  hp: 100,
  speed: 50,
  cp: 20,
  sp: 50,
  type: "planta"
} ;


const p2: TPokemon = {
  name: "Xarimander",
  hp: 80,
  speed: 30,
  cp: 40,
  sp: 20,
  type: ["fogo","água"]
} ;

function App() {
  return (
    <>

      <Incapacitado valor={true}/>
      <Brilhante valor={true} />

      {/* <Pokemon pokemon={p1}/>
      <Pokemon pokemon={p2}/>

      <h1>Hello world!</h1>
      <Disciplina codigo="DCC202" nome="Lab Web I" oferecidas={50} ocupadas={30}/>
      <Disciplina codigo="DCC206" nome="Lab Web II" oferecidas={60} ocupadas={40}/>
      <Disciplina codigo="DCC207" nome="Lab Front End"  oferecidas={80} ocupadas={50}/>
      <div>
        <code>Teste!</code>
      </div> */}

    </>
  )

}

export default App
