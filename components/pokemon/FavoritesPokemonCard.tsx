import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { FC } from 'react'

interface Props{
  id: number
}

export const FavoritesPokemonCard:FC<Props> = ({id}) => {
  const router = useRouter();

  const cardPokemonAction = ( id: number ) => {
    router.push(`/pokemon/${ id }`)
  }
  return (
    <Grid xs={6} sm={3} xl={1} key={id}>
          <Card 
            isHoverable 
            isPressable 
            css={{padding:10, ds: "none"}}
            onClick= {() => cardPokemonAction(id)}
          >
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              width={100}
              height={100}
            />
          </Card>
      </Grid>
  )
}
