import type { ReactNode } from "react";

type IncapacitadoProps = {
    valor: boolean;
}
export default function Incapacitado({ valor }: IncapacitadoProps) {
    let status: ReactNode;
    if (valor) {
        status = <span style={{color: "red"}}>Incapacitado</span>;
    } else {
        status = <span style={{color: "green"}}>Ativo</span>;
    }

    return (
        <div className="status">
            <span>{status}</span>
        </div>
    )
}