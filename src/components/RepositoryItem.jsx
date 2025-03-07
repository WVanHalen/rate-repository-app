import { View, StyleSheet, Image } from "react-native";
import Text from "./Text";
import theme from "../theme";
import Count from "./Count";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    flexShrink: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 20,
    borderRadius: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  languageText: {
    color: "white",
    fontWeight: theme.fontWeights.normal,
    fontSize: theme.fontSizes.body,
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
  flexContainer3: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingTop: 15,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.flexContainer1}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.flexContainer2}>
          <View>
            <Text testID="fullName" textPrimary>
              {item.fullName}
            </Text>
          </View>
          <View>
            <Text testID="description" text="textSecondary">
              {item.description}
            </Text>
          </View>
          <View style={styles.language}>
            <Text testID="language" style={styles.languageText}>
              {item.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer3}>
        <Count count={item.stargazersCount} name="Stars" />
        <Count count={item.forksCount} name="Forks" />
        <Count count={item.reviewCount} name="Reviews" />
        <Count count={item.ratingAverage} name="Rating" />
      </View>
    </View>
  );
};

export default RepositoryItem;
