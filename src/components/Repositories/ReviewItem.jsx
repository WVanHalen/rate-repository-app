import { View, StyleSheet } from "react-native";
import { format } from "date-fns";
import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    flexShrink: 1,
  },
  rating: {
    width: 50,
    height: 50,
    margin: 20,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 25,
    justifyContent: "center",
  },
  ratingText: {
    color: theme.colors.primary,
    alignSelf: "center",
  },
  flexContainer1: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  flexContainer2: {
    flexShrink: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 20,
  },
});

const ReviewItem = ({ review }) => {
  if (!review) return null;

  const date = format(new Date(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer1}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={styles.flexContainer2}>
          <Text textPrimary>{review.user.username}</Text>
          <Text color="textSecondary" fontWeight="normal">
            {date}
          </Text>
          <Text fontWeight="normal">{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;
