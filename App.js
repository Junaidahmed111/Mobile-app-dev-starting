import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appConatiner}>
      {/* input area */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="your course goal" />
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
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "blue",
    width: "80%",
    marginRight: 8,
    padding:8
  },
});
