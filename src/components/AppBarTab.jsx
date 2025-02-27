import { View, Text, Pressable, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    color: "white",
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <View>
      <Pressable>
        <Text style={styles.tab}>{text}</Text>
      </Pressable>
    </View>
  );
};
export default AppBarTab;
