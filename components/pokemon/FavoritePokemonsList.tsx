import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import { FavoritesPokemonCard } from './FavoritesPokemonCard';

interface Props{
  favoritePokemons: number[]
}

export const FavoritePokemonsList:FC<Props> = ({favoritePokemons}) => {

 
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {favoritePokemons.map((id) => (
        <FavoritesPokemonCard id={id} key={id}/>
    ))}
   </Grid.Container>
  )
}
