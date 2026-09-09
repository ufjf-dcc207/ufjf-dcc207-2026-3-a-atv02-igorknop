import "./Disciplina.css"

type DisciplinaProps = {
    codigo: string;
    nome: string;
}


export default function Disciplina(props: DisciplinaProps) {
    const codigo = props.codigo;
    const nome = props.nome;
    console.log(`Olá Disciplina: ${codigo} ${nome}`);
    return (
        <div className="disciplina">
            <code>{codigo}</code>
            <strong>{nome}</strong>
        </div>
    )
}