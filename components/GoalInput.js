import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEneteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEneteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEneteredGoalText("");
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="your course goals...."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="add goal" onPress={addGoalHandler} />
    </View>
  );
}
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
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
});
