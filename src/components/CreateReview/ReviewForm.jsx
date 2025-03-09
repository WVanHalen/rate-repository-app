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
  reviewBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  reviewBtnText: {
    color: "#ffffff",
    alignSelf: "center",
  },
  input: {
    marginBottom: 10,
  },
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.input}
        testID="ownerName"
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        style={styles.input}
        testID="repositoryName"
        name="repositoryName"
        placeholder="Repository name"
      />
      <FormikTextInput
        style={styles.input}
        testID="rating"
        name="rating"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        style={styles.input}
        testID="review"
        name="review"
        placeholder="Review"
        multiline={true}
      />
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.reviewBtn}>
          <Text
            testID="submitButton"
            style={styles.reviewBtnText}
            fontWeight="bold"
          >
            Create a review
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ReviewForm;
