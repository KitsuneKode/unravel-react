export const getPokemon = async () => {
  // throw Error("This is a test error");
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  return response.json();
};
