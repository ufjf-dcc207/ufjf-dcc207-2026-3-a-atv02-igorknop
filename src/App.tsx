import Disciplina from "./Disciplina.tsx"
import type { Pokemon } from "./types.ts"

const p1: Pokemon = {
  name: "Pokochó",
  hp: 100,
  speed: 50,
  cp: 20,
  sp: 50,
  type: ["planta"]
} ;


function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Disciplina codigo="DCC202" nome="Lab Web I" oferecidas={50} ocupadas={30}/>
      <Disciplina codigo="DCC206" nome="Lab Web II" oferecidas={60} ocupadas={40}/>
      <Disciplina codigo="DCC207" nome="Lab Front End"  oferecidas={80} ocupadas={50}/>
      <div>
        <code>Teste!</code>
      </div>
    </>
  )

}

export default App
