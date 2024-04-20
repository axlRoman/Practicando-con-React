import { useState } from "react"
import data from './data.json';
interface NamePok{
    language:string;
}


interface PokemonTableType{
    id:string;
    name:NamePok;
    type:string[];
    description:string;
    gender?:string;
}

export function useFetchPokemons(){
    const[pokemons, setPokemons] = useState<any[]>();
    const getPokemons = () => {
        setPokemons(data);
    }
    return {pokemons, getPokemons}
}

//export useFetchPokemons;
