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
    const[pokemon, setPokemon] = useState<any[]>();

    const getPokemons = () => {
        setPokemons(data);
    }

    const getPokemonById = (pokId:number) => {
        //getPokemons();
        setPokemon(pokemons?.find((pok)=>pok.id===pokId));
    }

    return {pokemons, getPokemons, pokemon, getPokemonById}
}

//export useFetchPokemons;
