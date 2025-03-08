import { View, FlatList, StyleSheet } from "react-native";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../../graphql/queries";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  if (loading) return null;

  const repository = data.repository;
  const reviews = repository.reviews;
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      // ...
    />
  );
};

export default SingleRepository;
