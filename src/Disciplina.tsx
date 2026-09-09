import "./Disciplina.css"
import Vagas from "./Vagas";

type DisciplinaProps = {
    codigo: string;
    nome: string;
}


export default function Disciplina({ codigo, nome }: DisciplinaProps) {
    console.log(`Olá Disciplina: ${codigo} ${nome}`);
    return (
        <div className="disciplina">
            <code>{codigo}</code>
            <strong>{nome}</strong>
            <Vagas oferecidas={40} ocupadas={20} />
        </div>
    )
}