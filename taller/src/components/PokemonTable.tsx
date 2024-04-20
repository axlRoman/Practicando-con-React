import { Table } from "antd";
import { useEffect, useState } from "react";
import { useFetchPokemons } from "../useFetchPokemons/useFetchPokemons";
import Link from "antd/es/typography/Link";


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
        getPokemons()
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
            render:(_:any, record:any) => record.name.english
        },
        {
            title: 'Pokemon Description',
            dataIndex: 'description',
        },
        {
            title: 'Details',
            render:() => <Link>Details</Link>
        }
      ];
    return (
        <>
            <Table 
                rowKey={"id"}
                dataSource={pokemonList}
                columns={columns}
            />
        </>
    )
}

export default PokemonTable;