import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { SvgUri } from "react-native-svg";
interface PokemonPreviewProps {
  name: string;
  uri: string;
}
const { width } = Dimensions.get("window");
export default function PokemonPreview({ name, uri }: PokemonPreviewProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <SvgUri width={width * 0.3} height={width * 0.3} uri={uri} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { padding: 16, alignItems: "center" },
  name: { fontSize: 40, textAlign: "center", textTransform: "capitalize" },
});
