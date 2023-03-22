import { PokemonSlice } from '@/interfaces'
import React, { FC } from 'react'
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props{
    pokemon: PokemonSlice
}

export const PokemonCard : FC<Props> = ({ pokemon }) => {

  const router = useRouter();
  const cardPokemonAction = ( id: number ) => {
    router.push(`/pokemon/${ id }`)
  }
  return (
    <Grid  xs={6} sm={3} md={2} xl={1}>
              <Card
                isHoverable
                isPressable
                onClick={() =>  cardPokemonAction( pokemon.id ) }
                css={{ ds: "none" }}
              >
                <Card.Body
                css={{ 
                  p:1
                }}>
                <Card.Image
                src={pokemon.image}
                height={70}
                width={70}
                  />
               
                </Card.Body>
                <Card.Footer>
                  <Row  justify='space-between'>
                    <Text 
                      color='white' 
                      
                      transform='capitalize'
                    >
                      {pokemon.name}
                    </Text>
                    <Text 
                      color='white' 
                      
                      transform='capitalize'
                    >
                      {String(pokemon.id)}
                    </Text>
                  </Row>
                </Card.Footer>
               

              </Card>

            </Grid>
  )
}
