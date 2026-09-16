export default function Condicoes() {
    const valores = ["dormindo", "queimando", "congelado", "paralizado"];

    return (<div className="condicoes">
        {valores.map(
            v => <span key={v}>{v}</span>
        )}
    </div>)
}