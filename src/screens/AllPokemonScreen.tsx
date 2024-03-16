import axios from "axios";
import PokemonPreview from "../component/PokemonPreview";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text } from "react-native";
import CenteredView from "../component/CentredView";

export default function AllPokemonScreen() {
  const { data, isPending, error } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["all prokemons"],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pageParam}`
      );
      return response.data;
    },
    getNextPageParam: (lastPage) => lastPage,
  });
  if (isPending)
    return (
      <CenteredView>
        <ActivityIndicator color="black" size="large" />
      </CenteredView>
    );
  if (error)
    return (
      <CenteredView>
        <Text>{error.message}</Text>
      </CenteredView>
    );
  if (!data)
    return (
      <CenteredView>
        <Text>Pas de Pokémons</Text>
      </CenteredView>
    );
  console.log(JSON.stringify(data.pages[0].name, null, 2));
  return (
    <PokemonPreview
      name={data.pages[0].name}
      uri={data.pages[0].sprites.other.dream_world.front_default}
    />
  );
}
