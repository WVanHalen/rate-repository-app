import { StyleSheet, View } from "react-native";
import Text from "./Text";

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
});

export const CountFormatter = (count) => {
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
            <Text testID={name} textPrimary>
              {formattedCount}
            </Text>
          </View>
          <View>
            <Text text="textSecondary">{name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Count;
