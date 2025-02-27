import { View, Text, StyleSheet, Image } from "react-native";
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
  fullName: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textPrimary,
  },
  description: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    flexWrap: "wrap",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer1}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{ uri: item.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.flexContainer2}>
          <View>
            <Text style={styles.fullName}>{item.fullName}</Text>
          </View>
          <View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.language}>
            <Text style={styles.languageText}>{item.language}</Text>
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
