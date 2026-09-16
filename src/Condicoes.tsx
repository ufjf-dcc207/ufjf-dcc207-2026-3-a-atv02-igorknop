export default function Condicoes(){
    const valores = ["dormindo", "queimando", "congelado", "paralizado"];
    const elementosJSX = [];
    for(let i=0; i< valores.length; i++){
        const elemento = <span key={valores[i]}>{valores[i]}</span>
        elementosJSX.push(elemento);
    }
    return (<div className="condicoes">
        {elementosJSX}
    </div>)
}