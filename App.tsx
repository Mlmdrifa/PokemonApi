import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// Import des éléments qui servent à mettre en place React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// création du queryClient, ressemble à la création d'un context
const queryClient = new QueryClient();

export default function App() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </QueryClientProvider>
    </View>
  );
}
