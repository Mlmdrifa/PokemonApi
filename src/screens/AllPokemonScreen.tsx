import axios from "axios";
import PokemonPreview from "../component/PokemonPreview";
import { useInfiniteQuery } from "@tanstack/react-query";
import { ActivityIndicator, FlatList, Text } from "react-native";
import CenteredView from "../component/CentredView";

export default function AllPokemonScreen() {
  const { data, isPending, error, fetchNextPage } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["all prokemons"],
    queryFn: async ({ pageParam = 1 }) => {
      console.log(pageParam);
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pageParam}`
      );
      return response.data;
    },
    getNextPageParam: (lastPage) => lastPage.id + 1,
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
    <FlatList
      onEndReached={fetchNextPage}
      data={data.pages}
      renderItem={({ item }) => (
        <PokemonPreview
          name={item.name}
          uri={item.sprites.other.dream_world.front_default}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
