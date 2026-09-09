import "./Disciplina.css"
export default function Disciplina(props) {
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