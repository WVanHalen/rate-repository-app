import { View, TouchableOpacity, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#ffffff",
    padding: 15,
  },
  signinBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  signinBtnText: {
    color: "#ffffff",
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
  },
});

const SignInForm = ({ onSubmit }) => {
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
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.signinBtn}>
          <Text
            testID="submitButton"
            style={styles.signinBtnText}
            fontWeight="bold"
          >
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignInForm;
