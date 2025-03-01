import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";
import CustomTextInput from "./CustomTextinput";
import { useFormik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 15,
  },
  submitButton: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  submitText: {
    color: "#ffffff",
    alignSelf: "center",
  },
  errorMsg: {
    color: "#d73a4a",
  },
});

const SignIn = () => {
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Username must be at least 3 characters long")
      .required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const usernameError = formik.touched.username && formik.errors.username;
  const passwordError = formik.touched.password && formik.errors.password;

  return (
    <View style={styles.container}>
      <CustomTextInput
        error={usernameError}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      {usernameError && (
        <Text style={styles.errorMsg}>{formik.errors.username}</Text>
      )}
      <CustomTextInput
        error={passwordError}
        secureTextEntry
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      {passwordError && (
        <Text style={styles.errorMsg}>{formik.errors.password}</Text>
      )}
      <Pressable style={styles.submitButton} onPress={formik.handleSubmit}>
        <Text style={styles.submitText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
