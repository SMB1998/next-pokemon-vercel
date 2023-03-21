import { Spacer, Text, useTheme } from "@nextui-org/react"
import { GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link";
import pokeApi from '../../api/pokeApi';

export const Navbar = () => {

    const {theme} = useTheme()
    return (
    <div
        style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'start',
            padding:'0x  20px',
            backgroundColor:'#ff8023'
        }  
        }
    >

        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
            alt="icono pokemon"
            width={50}
            height={50}
            style={{marginLeft:'10px', marginRight:'10px'}}
           
        />
        <Link href='/'>
            <Text color='white' h3>Pokemón</Text>
        </Link>
        <Spacer css={{flex:1}}/>
        <Link href='/favorites/' style={{ marginRight:'10px'}}>
            <Text color='white'>Favoritos</Text>
        </Link>
    </div>
  )
}


