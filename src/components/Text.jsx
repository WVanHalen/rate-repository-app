import { Text as NativeText, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  textPrimary: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    fontFamily: theme.fonts.main,
  },
  textSecondary: {
    color: theme.colors.textSecondary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextPrimary: {
    color: theme.colors.textPrimary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontWeightNormal: {
    fontWeight: theme.fontWeights.normal,
  },
});

const Text = ({ text, color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.textPrimary,
    text === "textSecondary" && styles.textSecondary,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "textPrimary" && styles.colorTextPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    fontWeight === "normal" && styles.fontWeightNormal,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
