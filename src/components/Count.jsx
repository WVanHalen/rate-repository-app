import { StyleSheet, Text, View } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flexItem: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  count: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
});

const CountFormatter = (count) => {
  return Math.abs(count) > 999
    ? Math.sign(count) * (Math.abs(count) / 1000).toFixed(1) + "k"
    : Math.sign(count) * Math.abs(count);
};

const Count = ({ count, name }) => {
  const formattedCount = CountFormatter(count);

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexItem}>
          <View>
            <Text style={styles.count}>{count}</Text>
          </View>
          <View>
            <Text style={styles.text}>{name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Count;
