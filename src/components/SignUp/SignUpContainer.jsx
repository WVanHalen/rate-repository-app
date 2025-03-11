import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import theme from "../../theme";
import SignUpForm from "./SignUpForm";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 15,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().min(5).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password confirmation does not match password"
    )
    .required("Password confirmation is required"),
});

const SignUpContainer = ({ initialValues, onSubmit }) => (
  <View style={styles.formContainer}>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default SignUpContainer;
