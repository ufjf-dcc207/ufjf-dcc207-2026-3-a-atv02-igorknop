type IncapacitadoProps = {
    valor: boolean;
}
export default function Incapacitado({ valor }: IncapacitadoProps) {

    if (valor) {
        return <span>Incapacitado</span>
    }
    else {
        return <span>Ativo</span>
    }
}