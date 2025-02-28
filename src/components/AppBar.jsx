import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";

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
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.flexItem}>
          <AppBarTab text="Repositories" to="/" />
        </View>
        <View style={styles.flexItem}>
          <AppBarTab text="Sign in" to="/signin" />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppBar;
