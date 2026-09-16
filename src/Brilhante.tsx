type BrilhanteProps = {
    valor: boolean;
}
export default function Brilhante({valor}:BrilhanteProps){
    return <>
        {valor && <div>Brilhante!!</div>}
    </>
    
}