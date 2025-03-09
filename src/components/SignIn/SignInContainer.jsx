import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import SignInForm from "./SignInForm";
import theme from "../../theme";

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.backgroundLight,
    padding: 15,
  },
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignInContainer = ({ initialValues, onSubmit }) => (
  <View style={styles.formContainer}>
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  </View>
);

export default SignInContainer;
