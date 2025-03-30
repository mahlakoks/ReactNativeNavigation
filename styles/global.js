import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 46,
    backgroundColor: "lightgray",
    flext: 1,
  },
  titleText: {
    fontFamily: "Arial",
    fontSize: 18,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  rating: {},
});

export const images = {
  ratings: {
    1: require("../assets/rating-1.png"),
    2: require("../assets/rating-2.png"),
    3: require("../assets/rating-3.png"),
    4: require("../assets/rating-4.png"),
    5: require("../assets/rating-5.png"),
  },
};
