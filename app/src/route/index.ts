const BASEURL = 'https://rickandmortyapi.com/api/character';

const route = (query: string) => `${BASEURL}?name=${query}`;

export default route;
