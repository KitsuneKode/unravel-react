import { createJsonData } from "@/api/json-data";
import { getPokemon } from "@/api/pokemon";
import ErrorBoundary from "@/components/error-boundary";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/pokemon")({
  component: PokemonErrorFree,
});

function PokemonErrorFree() {
  return (
    <ErrorBoundary>
      <RouteComponent />
    </ErrorBoundary>
  );
}
function RouteComponent() {
  const dummyData = {
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  };

  const mutation = useMutation({
    mutationFn: () => createJsonData(dummyData),
  });

  const { isLoading, data } = useQuery({
    queryKey: ["pokemon-data"],
    queryFn: () => getPokemon(),
    staleTime: 1 * 60 * 1000, // 1 minute
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      pokemon data will be loaded here
      <h2>Create a new Json object in a remote api Call</h2>
      <h5>Data</h5> ={" "}
      {` {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }
}`}
      <br />
      <button onClick={mutation.mutate}>Click me</button>
      <h4>Response data on Post request</h4>
      <br />
      {mutation.isLoading && <div>Creating </div>}
      <br />
      {mutation.data && <div>{JSON.stringify(mutation.data, null, 2)}</div>}
      <h4>Pokemon List</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map((pokemon) => (
            <tr key={pokemon.name}>
              <td>{pokemon.name}</td>
              <td>{pokemon.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
