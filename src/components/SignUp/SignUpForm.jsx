import { View, StyleSheet, TouchableOpacity } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    padding: 15,
  },
  signupBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signupBtnText: {
    color: "#ffffff",
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
  },
});

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.input}
        testID="username"
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        style={styles.input}
        testID="password"
        name="password"
        placeholder="Password"
        secureTextEntry
      />
      <FormikTextInput
        style={styles.input}
        testID="confirmPassword"
        name="confirmPassword"
        placeholder="Password confirmation"
        secureTextEntry
      />
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.signupBtn}>
          <Text
            testID="submitButton"
            style={styles.signupBtnText}
            fontWeight="bold"
          >
            Sign up
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;
