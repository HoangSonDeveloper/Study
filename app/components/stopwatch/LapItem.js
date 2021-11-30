import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Timer from "./Timer";

function LapItem({ interval, index, fastest, slowest }) {
  return (
    <View style={styles.container}>
      <AppText
        style={[
          styles.text,
          fastest === true ? styles.fastest : "",
          slowest === true ? styles.slowest : "",
        ]}
      >
        Lap {index}
      </AppText>
      <Timer
        style={[
          {
            fontSize: 20,
            justifyContent: "flex-end",
            alignSelf: "stretch",
            flexDirection: "row",
          },
          fastest === true ? styles.fastest : "",
          slowest === true ? styles.slowest : "",
        ]}
        interval={interval}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
  slowest: {
    color: colors.green,
  },
  fastest: {
    color: colors.red,
  },
});

export default LapItem;
