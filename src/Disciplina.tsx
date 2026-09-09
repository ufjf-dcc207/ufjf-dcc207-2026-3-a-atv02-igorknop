import "./Disciplina.css"

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
        </div>
    )
}