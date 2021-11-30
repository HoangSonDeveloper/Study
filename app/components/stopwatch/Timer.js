import moment from "moment";
import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText";

function Timer({ interval, style }) {
  const padding = (n) => (n < 10 ? "0" + n : n);
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);

  return (
    <View style={[styles.container, style]}>
      <AppText style={[styles.text, style]}>
        {padding(duration.minutes())}:{padding(duration.seconds())},
        {padding(centiseconds)}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 80,
  },
});

export default Timer;
