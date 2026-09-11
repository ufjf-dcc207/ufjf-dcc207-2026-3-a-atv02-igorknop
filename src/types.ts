export type PokemonType = "normal" | "planta" | "fogo" |"água";
export type Pokemon = {
    name: string;
    hp: number;
    speed: number;
    cp: number;
    sp: number;
    type: Array<PokemonType>;
};