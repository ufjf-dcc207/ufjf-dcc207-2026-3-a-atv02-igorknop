import "./Disciplina.css"
import Vagas from "./Vagas";

type DisciplinaProps = {
    codigo: string;
    nome: string;
    oferecidas: number;
    ocupadas: number;
}


export default function Disciplina({ codigo, nome, oferecidas, ocupadas }: DisciplinaProps) {
    console.log(`Olá Disciplina: ${codigo} ${nome}`);
    return (
        <div className="disciplina">
            <code>{codigo}</code>
            <strong>{nome}</strong>
            <Vagas oferecidas={oferecidas} ocupadas={ocupadas} />
        </div>
    )
}