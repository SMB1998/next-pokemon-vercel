

export const toggleFavorite = ( id:number ) => {
    if( typeof window === 'undefined') return false
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');

    if( favorites.includes( id )){
        favorites = favorites.filter( pokeId => pokeId !== id );
    }
    else{
        favorites.push( id )
    }

    localStorage.setItem('favorites', JSON.stringify( favorites))

}



export const existInFavorites = ( id:number ): boolean => {
    if( typeof window === 'undefined') return false
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]');
    return favorites.includes( id )
}

export const pokemons = (): number[] => {
    if( typeof window === 'undefined') return []
    return JSON.parse( localStorage.getItem('favorites')|| '[]' )
}