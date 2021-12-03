import React from "react";
import { Image, StyleSheet, View } from "react-native";

import AppText from "../AppText";
import stringHandler from "../../utils/stringHandler";

function DayItem({ day, icon, min, max }) {
  const fixDate = new Date(day * 1000).toDateString().slice(0, 3);

  return (
    <View style={styles.view}>
      <AppText style={styles.text}>{fixDate}</AppText>
      <Image
        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
        style={styles.icon}
      />
      <AppText>
        {stringHandler.precision(min)}° - {stringHandler.precision(max)}°
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  text: {
    minWidth: 60,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

export default DayItem;
