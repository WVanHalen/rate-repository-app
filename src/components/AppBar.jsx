import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import useAuthStorage from "../hooks/useAuthStorage";
import { ME } from "../graphql/queries";
import { useApolloClient, useQuery } from "@apollo/client";
import ReviewForm from "./CreateReview/ReviewForm";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // ...
  },
  flexItem: {
    flexGrow: 1,
    paddingRight: 20,
    flexDirection: "row",
  },
  scrollView: {
    flexDirection: "row",
  },
  // ...
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const logout = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.flexItem}>
          <AppBarTab text="Repositories" to="/" />
        </View>
        <View style={styles.flexItem}>
          {data?.me ? (
            <>
              <View style={styles.flexItem}>
                <AppBarTab text="Create a review" to="/review" />
              </View>
              <View style={styles.flexItem}>
                <AppBarTab text="My reviews" to="/myreviews" />
              </View>
              <View style={styles.flexItem}>
                <AppBarTab onPress={logout} text="Sign out" to="/signin" />
              </View>
            </>
          ) : (
            <>
              <View style={styles.flexItem}>
                <AppBarTab text="Sign in" to="/signin" />
              </View>
              <View style={styles.flexItem}>
                <AppBarTab text="Sign up" to="/signup" />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
