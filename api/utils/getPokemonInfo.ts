import { PokemonDetails } from "@/interfaces"
import pokeApi from "../pokeApi"



export const getPokemonInfo = async ( nameOrId: string) => {

    try{
        const { data } = await pokeApi.get<PokemonDetails>(`/pokemon/${ nameOrId }`)
        const pokemon = {
            id: data.id,
            name:data.name,
            sprites: data.sprites
            }
        return pokemon
    }
    catch(error){
        return null
    }
    
    
    
   
}