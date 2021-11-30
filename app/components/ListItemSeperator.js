import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ListItemSeperator() {
  return <View style={styles.seperator} />;
}

const styles = StyleSheet.create({
  seperator: {
    height: 0.5,
    width: "100%",
    backgroundColor: colors.light,
    opacity: 0.4,
  },
});

export default ListItemSeperator;
