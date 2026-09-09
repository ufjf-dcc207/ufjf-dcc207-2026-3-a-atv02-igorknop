import "./Disciplina.css"
const codigo = "DCC207";
const nome = "Laboratório Front End";
export default function Disciplina() {
    console.log(`Olá Disciplina: ${codigo} ${nome}`);
    return (
        <div className="disciplina">
            <code>{codigo}</code>
            <strong>{nome}</strong>
        </div>
    )
}