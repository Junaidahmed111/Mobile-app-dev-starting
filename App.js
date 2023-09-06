import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return <View style={styles.container}>
<Text>hello world</Text>


  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
