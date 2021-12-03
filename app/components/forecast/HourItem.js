import React from "react";
import { Image, StyleSheet, View } from "react-native";
import stringHandler from "../../utils/stringHandler";
import AppText from "../AppText";

function HourItem({ time, icon, temp }) {
  const hour = new Date(time * 1000).getHours();

  return (
    <View style={styles.view}>
      <AppText>{stringHandler.padding(hour)}</AppText>
      <Image
        source={{ uri: `http://openweathermap.org/img/wn/${icon}.png` }}
        style={styles.icon}
      />
      <AppText>{stringHandler.precision(temp)}°</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  icon: {
    marginVertical: 10,
    width: 40,
    height: 40,
  },
});

export default HourItem;
