import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ text, to, onPress }) => {
  return (
    <View>
      <Link onPress={onPress} to={to} component={Pressable}>
        <Text style={styles.tab}>{text}</Text>
      </Link>
    </View>
  );
};
export default AppBarTab;
