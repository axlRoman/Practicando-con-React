import { getComputedToken } from "antd/es/theme/useToken";
import { useFetchPokemons } from "../useFetchPokemons/useFetchPokemons";
import { useEffect } from "react";

interface Obj{

}
interface Pokemon { 
    id:number;
}

function Pokemon({id}:Pokemon) {
    const {pokemon, getPokemonById,getPokemons, pokemons} = useFetchPokemons();
    useEffect(()=>{
        getPokemons();
    })
    useEffect(() => {
        if(pokemons){
            getPokemonById(1)
        }
    },[pokemons])
    useEffect(() => {
        console.log(pokemon);
    },[pokemon])
  return (
    <>
        
    </>
  );
}

export default Pokemon;
