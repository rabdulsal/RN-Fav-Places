import { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

export default function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(text) {
    setEnteredTitle(text);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
        <ImagePicker />
        <LocationPicker />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
  label: { fontWeight: "bold", marginBottom: 4, color: Colors.primary500 },
  form: {
    flex: 1,
    padding: 24,
  },
});
