import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Card, Container, Grid, Row, Text } from '@nextui-org/react'
import { Layout } from '@/components/layouts'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api'
import { PokemonDetails, PokemonSlice } from '@/interfaces'
import { NEXT_REQUEST_META } from 'next/dist/server/request-meta'
import { useEffect, useState } from 'react';
import { pokemons } from '../../api/utils/localFavorites';
import { NoFavoritesPage } from '@/components/ui/NoFavoritesPage'
import { useRouter } from 'next/router';
import { FavoritePokemonsList } from '@/components/pokemon/FavoritePokemonsList'


const inter = Inter({ subsets: ['latin'] })



const FavoritesPage: NextPage = () =>{
  const [pokemonList, setPoekmonList] = useState<number[]>([])
  
 
  useEffect(() => {
    setPoekmonList(pokemons())
  }, [])

  return (
    <>
      <Layout title='Favoritos'>
        { pokemonList.length === 0 ?
         <NoFavoritesPage/>
         : 
         <FavoritePokemonsList favoritePokemons={pokemonList}/>
        }
        
        
      </Layout>
    </>
  )
}



export default FavoritesPage;
