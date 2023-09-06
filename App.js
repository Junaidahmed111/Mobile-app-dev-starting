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
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appConatiner: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "blue",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
