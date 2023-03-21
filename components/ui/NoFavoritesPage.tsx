import { Container, Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const NoFavoritesPage = () => {
  return (
    <>
    <Container
        style={{
              display:'flex',
              flexDirection:'column',
              height:'calc(100vh)',
              justifyContent:'center',
              alignItems: 'center'
            }}
          >
            <Text h1> No hay favoritos</Text>
            <Image
              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
              width={250}
              height={250}
              alt='No Pokemons Image'
              style={{
                opacity:0.1
              }}
            />

          </Container>
          </>
  )
}
