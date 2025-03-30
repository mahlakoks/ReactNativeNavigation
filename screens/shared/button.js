import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function FlatButton({ text,onPress }) {
  return (
    <TouchableOpacity>
      <View style={Styles.button}>
        <Text style={Styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "green",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
