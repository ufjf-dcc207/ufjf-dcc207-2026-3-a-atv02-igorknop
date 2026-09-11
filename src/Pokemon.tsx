import type { Pokemon, PokemonType } from "./types"

type PokemonProps = {
    pokemon: Pokemon;
}
export default function Pokemon({ pokemon }: PokemonProps) {
    return (
        <div className="pokemon">
            <dt>Pokemon:</dt>
            <dd>{pokemon.name}</dd>
            <dd>{Array.isArray(pokemon.type) ? pokemon.type.map((t) => <TypeTag type={t} />) :
                <TypeTag type={pokemon.type} />}</dd>
            <Atributo tag="HP" valor={pokemon.hp} />
            <Atributo tag="Speed" valor={pokemon.speed} />
            <Atributo tag="CP" valor={pokemon.cp} />
            <Atributo tag="SP" valor={pokemon.sp} />
        </div>
    )
}

function Atributo({ tag, valor }) {
    return (
        <>
            <dt>{tag}:</dt>
            <dd>{valor}</dd>
            <dd><progress max={100} value={valor} /></dd>
        </>
    )
}

const cores = {
    "água": "blue",
    "fogo": "red",
    "planta": "green",
    "normal": "beige"
}

type TypeTagProps = {
    type: PokemonType;
}
function TypeTag({ type }: TypeTagProps) {
    return (<span style={{ background: cores[type], color: "white", padding: "0.05em", margin: "0.05em" }}>{type}</span>)
}