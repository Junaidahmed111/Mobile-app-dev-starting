import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appConatiner}>
      {/* input area */}
      <View>
        <TextInput placeholder="your course goal" />
        <Button title="add goal" />
      </View>
      {/* lists of goals rendered */}
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appConatiner: {
    padding: 50,
  },
});
