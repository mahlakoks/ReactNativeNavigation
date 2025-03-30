/*  Stack Navigation

import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Button
        title="go to reviews"
        onPress={() => {
          navigation.navigate("ReviewDetails");
        }}
      />
    </View>
  );
}
*/

import React,{useState} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "number1", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "number0", rating: 4, body: "lorem ipsum", key: "0" },
    { title: "number2", rating: 3, body: "lorem ipsum", key: "2" },
    { title: "number3", rating: 2, body: "lorem ipsum", key: "3" },
    { title: "number4", rating: 1, body: "lorem ipsum", key: "4" },
    { title: "number5", rating: 0, body: "lorem ipsum", key: "5" },
    { title: "number6", rating: 9, body: "lorem ipsum", key: "6" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
          <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
  )}
      />
    </View>
  );
}
