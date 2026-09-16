import type { ReactNode } from "react";

type IncapacitadoProps = {
    valor: boolean;
}
export default function Incapacitado({ valor }: IncapacitadoProps) {

    return (
        <div className="status">
            <span style={{ color: valor ? "red" : "green" }}>{valor ? "Incapacitado" : "Ativo"}</span>
        </div>
    )
}