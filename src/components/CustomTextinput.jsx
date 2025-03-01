import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 10,
    borderColor: theme.colors.mainBackground,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  errorInput: {
    borderColor: "#d73a4a",
  },
});

const CustomTextInput = ({ error, ...props }) => {
  return (
    <TextInput
      style={[styles.inputField, error && styles.errorInput]}
      {...props}
    />
  );
};

export default CustomTextInput;
