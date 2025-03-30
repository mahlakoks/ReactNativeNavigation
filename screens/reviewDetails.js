import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  console.log(route.params);
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{`Here is how you were rated\n\t${rating} ${title} ${body}`}</Text>
    </View>
  );
}
