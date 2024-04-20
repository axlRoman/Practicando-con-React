import { Table } from "antd";
import { useEffect, useState } from "react";
import { useFetchPokemons } from "../useFetchPokemons/useFetchPokemons";


function PokemonTable(){
    const {pokemons,getPokemons}=useFetchPokemons();
    const[pokemonList, setPokemonList] = useState<any>();
    /*useEffect(() => {
        getPokemons();
        console.log("Use efecto");
        console.log(pokemons);
    },[])*/
/*
    useEffect(() => {
        getPokemons();
        console.log("Use efecto");
        console.log(pokemons);
    },[pokemons])*/

    useEffect(() => {
        if(pokemons){
            setPokemonList(pokemons)
            console.log(pokemons)
        }

    },[pokemons])
    
    const columns = [
        {
          title: 'Pokemon Id',
          dataIndex: 'id',
        },
        {
            title: 'Pokemon Name',
            dataIndex: 'name',
        },
        {
            title: 'Pokemon Description',
            dataIndex: 'description',
        }
      ];
    return (
        <>
            <Table 
                dataSource={pokemonList}
                columns={columns}
            />
        </>
    )
}

export default PokemonTable;