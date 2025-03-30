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

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "./shared/card";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ReviewForm from "./reviewForms";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "number1", rating: 5, body: "lorem ipsum", key: "0" },
    { title: "number0", rating: 4, body: "lorem ipsum", key: "1" },
    { title: "number2", rating: 3, body: "lorem ipsum", key: "2" },
    { title: "number4", rating: 1, body: "lorem ipsum", key: "3" },
    { title: "number5", rating: 2, body: "lorem ipsum", key: "4" },
    { title: "number6", rating: 3, body: "lorem ipsum", key: "5" },
  ]);

  const [modalDisplay, setModalDisplay] = useState(false);

  function setModalOpen(value) {
    setModalDisplay(value);
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalDisplay} animationType="slide">
        <View style={Styles.modalContent}>
          <MaterialIcons
            name="close"
            style={{ ...Styles.modalToggle, ...Styles.modalClose }}
            size={24}
            onPress={() => {
              setModalOpen(false);
            }}
          />
          {/* // <Text style={Styles.modal}>Are you old enough to play?</Text> */}
          <ReviewForm />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={Styles.modalToggle}
        onPress={() => {
          setModalOpen(true);
        }}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  modal: {
    padding: 20,
    margin: 10,
    backgroundColor: "yellow",
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 40,
    marginBottom: 10,
  },
});
