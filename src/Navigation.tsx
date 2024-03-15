import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPokemonScreen from "./screens/AllPokemonScreen";
import PokemonDetailsScreen from "./screens/PokemonDetailsScreen";

type RootStackParamList = {
  AllPokemon: undefined;
  PokemonDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AllPokemon" component={AllPokemonScreen} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
