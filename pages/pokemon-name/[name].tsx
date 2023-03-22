import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Card, Grid, Row, Text,Container, useCurrentState } from '@nextui-org/react'
import { Layout } from '@/components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api'
import { PokemonDetails, PokemonListResponse, PokemonSlice } from '@/interfaces'
import { getPokemonInfo } from '../../api/utils/getPokemonInfo';
import { redirect } from 'next/dist/server/api-utils'
import { existInFavorites, toggleFavorite } from '@/api/utils'
import confetti from 'canvas-confetti'


const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemon:PokemonDetails;
}



const PokemonPageName: NextPage<Props> = ({pokemon}) =>{

  const [ isInFavorites, setIsInFavorites ] = useState(existInFavorites( pokemon.id ))

  const onToggleFavorites = ( id : number ) => {
    console.log(isInFavorites)
    setIsInFavorites(!isInFavorites)
    toggleFavorite( id )
    if( isInFavorites) return;
    confetti({
      zIndex:999,
      particleCount:160,
      spread:160,
      angle:-160,
      origin:{
        x:1,
        y:0
      }
    })
  }
  
  return (
    <>
      <Layout title={pokemon.name}>
           
           <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
              <Grid xs={ 12 } sm={ 4 } >
                <Card isHoverable css={{ padding: '30px', ds: "none" }}  >
                    <Card.Body>
                      <Card.Image 
                        src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                        alt={ pokemon.name }
                        width="100%"
                        height={ 200 }
                      />
                    </Card.Body>
                </Card>
              </Grid>

              <Grid xs={ 12 } sm={ 8 }>
                <Card>
                  <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Text h1 transform='capitalize'>{ pokemon.name }</Text>

                    <Button
                      color= { !isInFavorites ? "gradient": undefined }
                      onPress={() => onToggleFavorites(pokemon.id)}
                    >
                      { isInFavorites ? "Sacar de favoritos" : "Agregar a favoritos"}
                    </Button>
                  </Card.Header>

                  <Card.Body>
                    <Text size={30}>Sprites:</Text>

                    <Container direction='row' display='flex' gap={ 0 }>
                        <Image 
                          src={ pokemon.sprites.front_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_default }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.front_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />
                        <Image 
                          src={ pokemon.sprites.back_shiny }
                          alt={ pokemon.name }
                          width={ 100 }
                          height={ 100 }
                        />

                    </Container>


                  </Card.Body>  


                </Card>
              </Grid>

           </Grid.Container>



        </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
const pokemonNames:string[] = data.results.map((pokemon) => (pokemon.name))

return{
    paths:pokemonNames.map( name=> ({
      params: { name }
    })),
    fallback: false
  }
}

export const getStaticProps:GetStaticProps = async ({params}) => {
  
  const { name } = params as { name:string };
  const pokemon = await getPokemonInfo(name)
    return{
      props:{
          pokemon
      }
  }
 
}


export default PokemonPageName;
