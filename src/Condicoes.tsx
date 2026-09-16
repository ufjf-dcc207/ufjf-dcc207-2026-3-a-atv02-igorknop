import "./Condicoes.css";
type CondicoesProps = {
    valores: Array<string>;
}
export default function Condicoes({valores}:CondicoesProps) {
    return (<div className="condicoes">
        {valores.map(
            v => <span key={v}>{v}</span>
        )}
    </div>)
}