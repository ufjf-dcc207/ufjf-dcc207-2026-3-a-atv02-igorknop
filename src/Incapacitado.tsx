type IncapacitadoProps = {
    valor: boolean;
}
export default function Incapacitado({ valor }: IncapacitadoProps) {
    let status: "Incapacitado"|"Ativo";
    if (valor) {
        status = "Incapacitado";
    } else {
        status = "Ativo";
    }

    return (
        <div className="status">
            <span>{status}</span>
        </div>
    )
}