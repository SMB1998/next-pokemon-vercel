import Head from "next/head"
import { FC } from "react"
import { Navbar } from '../ui/Navbar';


interface Props {
    children?: React.ReactNode;
    title?:string;
  }
  

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || "Poke App" }</title>
            <meta name="autor" content={`Santiagfo Muñoz B ${title}`}/>
            <meta name="description" content={`Pokemon information, ${title}`}/>
            <meta name="keywords" content={`Pokemon, pikachu, pokedex, ${title}`}/>
            <meta property="og:title" content={title || "Poke App" } />
            <meta property="og:descrption" content={` esta es la pagina de ${ title }` } />
            <meta property="og:image" content="https://next-pokemon-vercel-beta.vercel.app/img/banner.jpeg" />

        </Head>
        <Navbar/>
        <main>
            {children}
        </main>
    </>
  )
}
