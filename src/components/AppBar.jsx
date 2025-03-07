import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import useAuthStorage from "../hooks/useAuthStorage";
import { ME } from "../graphql/queries";
import { useApolloClient, useQuery } from "@apollo/client";

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
            <AppBarTab onPress={logout} text="Sign out" to="/signin" />
          ) : (
            <AppBarTab text="Sign in" to="/signin" />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
