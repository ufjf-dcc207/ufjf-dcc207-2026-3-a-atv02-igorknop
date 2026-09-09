type VagasProps = {
    oferecidas: number;
    ocupadas: number;
}
export default function Vagas({ oferecidas, ocupadas }: VagasProps) {
    const percentual = ocupadas / oferecidas *100;
    return (
        <div>
            <span>Oferecidas: {oferecidas}</span>
            <span>Ocupadas: {ocupadas}</span>
            <span>({percentual.toFixed(2)}%)</span>
            <progress max={100} value={percentual} ></progress>
        </div>
    )
}