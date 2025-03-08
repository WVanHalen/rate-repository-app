import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import Count from "../Count";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    flexShrink: 1,
    marginBottom: 10,
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
  githubBtn: {
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    margin: 20,
  },
  githubBtnText: {
    color: "#ffffff",
    alignSelf: "center",
  },
});

const RepositoryInfo = ({ repository }) => {
  const onSubmit = () => {
    Linking.openURL(`${repository.url}`);
  };

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.flexContainer1}>
        <View>
          <Image
            style={styles.tinyLogo}
            source={{ uri: repository.ownerAvatarUrl }}
          />
        </View>
        <View style={styles.flexContainer2}>
          <View>
            <Text testID="fullName" textPrimary>
              {repository.fullName}
            </Text>
          </View>
          <View>
            <Text testID="description" text="textSecondary">
              {repository.description}
            </Text>
          </View>
          <View style={styles.language}>
            <Text testID="language" style={styles.languageText}>
              {repository.language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.flexContainer3}>
        <Count count={repository.stargazersCount} name="Stars" />
        <Count count={repository.forksCount} name="Forks" />
        <Count count={repository.reviewCount} name="Reviews" />
        <Count count={repository.ratingAverage} name="Rating" />
      </View>
      <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
        <View style={styles.githubBtn}>
          <Text
            testID="submitButton"
            style={styles.githubBtnText}
            fontWeight="bold"
          >
            Open in GitHub
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RepositoryInfo;
