import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from './shared/button'

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("isNum1-5", "Rating mubst be 1-5", (val) => {
      console.log(">>>>>> " + parseInt(val));
      return parseInt(val) <= 5 && parseInt(val) >= 1;
    }),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: "",
          body: "",
          rating: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); //Automatically crears the form
          addReview(values);
          // console.log(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange("title")}
              value={props.values.title}
              onBlur={props.handleBlur("title")}
            />
            <Text style={Styles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={props.handleChange("body")}
              value={props.values.body}
              onBlur={props.handleBlur("body")}//Real time feedback on errors
            />
            <Text style={Styles.errorText}>
              {props.touched.body && props.errors.body} 
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating 1-5"
              onChangeText={props.handleChange("rating")}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={Styles.errorText}>
              {props.touched.rating && props.errors.rating}
            </Text>

            {/* // <Button title="SUBMIT" color="red" onPress={props.handleSubmit} /> */}
            <FlatButton text="SUBMIT" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const Styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 3,  
  },
});
