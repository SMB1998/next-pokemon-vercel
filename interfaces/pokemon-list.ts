export interface PokemonListResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  PokemonSlice[];
}

export interface PokemonSlice {
    name: string;
    url:  string;
    image: string;
    id: number
}
