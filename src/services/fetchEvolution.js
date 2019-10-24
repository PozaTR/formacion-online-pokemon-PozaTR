const ENDPOINT  = 'https://pokeapi.co/api/v2/evolution-chain';

const fetchEvolution = () => fetch(ENDPOINT).then(response => response.json());

export { fetchEvolution }