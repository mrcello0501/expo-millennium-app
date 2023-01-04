import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import env from "./src/env";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ENV_TEST: {env.test}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
