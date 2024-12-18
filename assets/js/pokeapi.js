
const pokeApi = {}

pokeApi.getPokemonUrl = (pokemon) => {
    return fetch(pokemon.url).then((res) => res.json())
}

pokeApi.getPokemons = (offset=0,limit=12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((res) => res.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonUrl))
    .then((detailsReq) => Promise.all(detailsReq))
    .then((pokemonDetails) => pokemonDetails)
}