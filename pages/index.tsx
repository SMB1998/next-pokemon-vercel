import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { Layout } from '@/components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api'
import { PokemonSlice, PokemonListResponse } from '../interfaces/pokemon-list';
import { PokemonCard } from '../components/pokemon/PokemonCard';

const inter = Inter({ subsets: ['latin'] })

interface Props {
  pokemons:PokemonSlice[]
}

const HomePage: NextPage<Props>= ({ pokemons }) =>{
  console.log(pokemons)
  return (
    <>
      <Layout title='Pokedex App'>
          <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map((pokemon, id) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
            />
           ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}

export const getStaticProps:GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(data)
  const pokemons: PokemonSlice[] = data?.results?.map((pokemon, id)=>({
    ...pokemon,
    id: id+1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`,
  }))
  return {
    props:{
        pokemons
    }
}
 
}

export default HomePage;