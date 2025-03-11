import { View, StyleSheet } from "react-native";
import { format } from "date-fns";
import theme from "../../theme";
import Text from "../Text";
import { useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 10,
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
    paddingBottom: 20,
  },
});

const UserReviews = () => {
  const { data } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: "cache-and-network",
  });
  const reviewNodes = data.me.reviews.edges.map((edge) => edge.node);
  const reviews = reviewNodes.map((node) => {
    const formattedDate = format(new Date(node.createdAt), "dd.MM.yyyy");
    return { ...node, createdAt: formattedDate };
  });

  return (
    <>
      {reviews.map((node) => (
        <View style={styles.container}>
          <View style={styles.flexContainer1}>
            <View style={styles.rating}>
              <Text style={styles.ratingText}>{node.rating}</Text>
            </View>
            <View style={styles.flexContainer2}>
              <Text color="textSecondary" fontWeight="normal">
                {node.createdAt}
              </Text>
              <Text fontWeight="normal">{node.text}</Text>
            </View>
          </View>
        </View>
      ))}
    </>
  );
};

export default UserReviews;
