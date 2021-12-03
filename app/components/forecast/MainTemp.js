import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../AppText";
import stringHandler from "../../utils/stringHandler";

function MainTemp({ current }) {
  if (!current) return null;

  const temp = current.main.temp;
  const temp_min = current.main.temp_min;
  const temp_max = current.main.temp_max;
  const description = current.weather[0].description;
  const city = current.name;

  return (
    <View style={styles.container}>
      <AppText style={styles.city}>{city}</AppText>
      <AppText style={styles.mainTemp}>
        {stringHandler.precision(temp)}°
      </AppText>
      <AppText style={styles.description}>
        {stringHandler.uppercase(description)}
      </AppText>
      <View style={styles.subTemp}>
        <AppText>C: {stringHandler.precision(temp_max)}° </AppText>
        <AppText> T: {stringHandler.precision(temp_min)}°</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  city: {
    fontSize: 32,
  },
  description: {
    fontSize: 20,
    marginBottom: 8,
  },
  subTemp: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mainTemp: {
    fontSize: 100,
    lineHeight: 110,
    fontWeight: "100",
  },
});

export default MainTemp;
