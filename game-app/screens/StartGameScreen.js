import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberinput}
        maxLength={2}
        keyboardType="numbar-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonlayout}>
        <View style={styles.buttoncontainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttoncontainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    padding: 16,
    marginTop: 100,
    backgroundColor: "#4e0329",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberinput: {
    heigh: 50,
    width: 150,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    // textAlign: "center",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",

    // alignContent: "center",
  },
  buttonlayout: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttoncontainer: {
    flex: 1,
  },
});
